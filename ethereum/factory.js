import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//creating Javascript accessible instance of our Factory contract what we did while testing
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x695e16cEacfeaAaeDB5801a3C98b5EFc6bD75454"
);
export default instance;
