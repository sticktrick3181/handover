const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000",
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deploys a campiagn and a factory adddress", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  //accessing the mapping data structure of solidity
  it("assigns account at 0 as the manager of the campaign", async () => {
    const campaignManager = await campaign.methods.manager().call();
    assert.equal(campaignManager, accounts[0]);
  });
  it("allows other accounts contribute and make them as aprovers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert.ok(isContributor);
  });
  it("cannot take a contribution less than the minimum contribution", async () => {
    try {
      await campaign.methods.contribute().send({
        value: "50",
        from: accounts[2],
      });
      assert(false);
    } catch (error) {
      // console.log(error);
      assert(error);
    }
  });
  it("allows manager to create a request", async () => {
    const description = "Buy Land for the factory";
    await campaign.methods
      .createRequest(description, "1000000", accounts[1])
      .send({
        from: accounts[0],
        gas: "1000000",
      });
    const request = await campaign.methods.requests(0).call();
    assert.equal(description, request.description);
  });
  it("processes requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether"),
    });

    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      .send({ from: accounts[0], gas: "1000000" });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000",
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
    console.log(balance);
    //recipeint account i.e. accounts[1] initially had 100 ether but now we gave him 5 ethers as it was the recipient so its balance should be probably ~105 ether and to be sure we will assert for balance > 104.
    assert(balance > 104);
  });
});
