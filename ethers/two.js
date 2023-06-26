// todo: contract intraction

// imports here
import { JsonRpcProvider, Contract } from "ethers";
import {} from "dotenv/config";

const provider = new JsonRpcProvider(process.env.RPC_URL);

const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
// const contract = new Contract(address, ERC20_ABI, provider);
const contract = new Contract(address, abi, provider);

// main function
const main = async () => {
    const name = await contract.name();
    console.log(name);
};

main();
