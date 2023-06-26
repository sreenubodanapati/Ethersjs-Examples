// todo: Basic Intraction with Ethers.js

// imports here
import { JsonRpcProvider, formatEther } from "ethers";
import {} from "dotenv/config";

const provider = new JsonRpcProvider(process.env.RPC_URL);

const main = async () => {
    const balance = await provider.getBalance(process.env.ADDRESS);
    const convert = formatEther(balance);
    console.log(convert);
};

main();
