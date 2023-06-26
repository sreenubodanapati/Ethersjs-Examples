// Todo: send some 'Eath' from one account to another account

// imports here
import { JsonRpcProvider, Wallet, parseEther } from "ethers";
import {} from "dotenv/config";

const provider = new JsonRpcProvider(process.env.RPC_URL);

const account1 = "";
const account2 = "";

const PRIVATE_KEY = "";
const wallet = new Wallet(PRIVATE_KEY, provider);

const main = async () => {
    // send money
    const tx = await wallet.sendTransaction({
        to: account2,
        value: parseEther("0.0025"),
    });

    await tx.wait();

    console.log(tx);

    // show account 1 balance
    const account1_balance = provider.getBalance(account1);
    console.log(account1_balance);

    // show account 2 balance
    const account2_balance = provider.getBalance(account2);
    console.log(account2_balance);
};

main();
