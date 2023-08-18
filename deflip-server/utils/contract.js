import dotenv from 'dotenv'
dotenv.config()

import Web3 from 'web3';
const web3 = new Web3("http://127.0.0.1:8545/"); // const web3 = new Web3(process.env.QuickNode_URL);

import TokenABI from './contractABI/ChainToken.json' assert { type: "json" };
import KartABI from './contractABI/ChainKart.json' assert { type: "json" };
import SellerABI from './contractABI/SellerContract.json' assert { type: "json" };
import UserABI from './contractABI/UserContract.json' assert { type: "json" };

const tokenContractABI = TokenABI.abi;
const kartContractABI = KartABI.abi;
const sellerContractABI = SellerABI.abi;
const userContractABI = UserABI.abi;

const tokenContractAddress = "0x638e2d5F06EF597FB4a86977d3E20D0950aDC245";
const kartContractAddress = "0x0E08bFBBa5E9E5d2BaD3d0dB65B6dD91CECdc6DB";

let userContractAddress = ''; //Function to retrive
let sellerContractAddress = ''; //Function to retrive

const PRIVATE_KEY = "d7d4b519da331fe50a825f883347a5084f915b1d7a524cce93a57f2f7ba74840";
const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);

export const tokenInstance = new web3.eth.Contract(tokenContractABI, tokenContractAddress);
export const kartInstance = new web3.eth.Contract(kartContractABI, kartContractAddress);
export const userInstance = new web3.eth.Contract(userContractABI, userContractAddress);
export const sellerInstance = new web3.eth.Contract(sellerContractABI, sellerContractAddress);

let gasPrice;

async function getGas(){
    try{
        gasPrice = await web3.eth.getGasPrice(); 
    }catch(err){
        console.log(err);
    }
}

getGas();

export const transaction = {
    from: account.address,
    to: kartContractAddress,
    gasPrice: gasPrice,
    gasLimit: 0,
    value: 0
};
