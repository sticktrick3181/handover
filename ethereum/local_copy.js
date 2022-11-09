import web3 from "./web3";
const address = "0x91554786eE730622906d112E83eFD1A2a5CdFD85";
const abi = [
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "deployedCampaigns",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getDeployedCampaigns",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "minimum", type: "uint256" }],
    name: "createCampaign",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
export default new web3.eth.Contract(abi, address);
