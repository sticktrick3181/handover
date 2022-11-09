import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//creating Javascript accessible instance of our Factory contract what we did while testing
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x91554786eE730622906d112E83eFD1A2a5CdFD85"
);
export default instance;
