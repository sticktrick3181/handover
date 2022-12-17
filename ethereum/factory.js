import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//creating Javascript accessible instance of our Factory contract what we did while testing
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe1a370ed447e9642c8f33a4f8869b84dc621409e"
);
export default instance;
