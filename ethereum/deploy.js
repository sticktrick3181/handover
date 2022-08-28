const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
//we will only deploy the factory because the people will only interact with the factory and from there they will create new campaigns.
const compiledFactory = require("./build/CampaignFactory.json");
const provider = new HDWalletProvider(
  "observe ranch lobster keep tuna whisper eyebrow organ struggle penalty winter jealous",
  "https://rinkeby.infura.io/v3/79c1636048614f3aab07a364b9242aa8"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const list = await web3.eth.getAccounts();
  console.log("Parent account for deploying ", list[0]);

  const contract = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode,
    })
    .send({ from: list[0], gas: "1000000" });
  provider.engine.stop();
  //   console.log(interface);
  console.log(contract.options.address);
};
deploy();
