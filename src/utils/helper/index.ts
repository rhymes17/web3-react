import { ethers } from "ethers";
import { contractAddress, getURL } from "../../constants";
import axios from "axios";
import sample_abi from "./sample_abi.json"

interface ISendEth {
  amount: string;
  address: string;
  setError: (value: React.SetStateAction<boolean>) => void;
  setErrorMessage: (value: React.SetStateAction<string>) => void;
  hasProvider: boolean;
}

interface ITransaction {
  address: string;
  topics: string[];
  data: string;
  blockNumber: string;
  blockHash: string;
  timeStamp: string;
  gasPrice: string;
  gasUsed: string;
  logIndex: string;
  hash: string;
  transactionIndex: string;
}

interface IQueryRes {
  status: string;
  message: string;
  result: string | ITransaction[];
}

export const sendEth = async ({
  amount,
  address,
  setError,
  setErrorMessage,
  hasProvider,
}: ISendEth) => {
  try {
    if (!hasProvider) {
      throw new Error("No crypto wallet found, Please install it.");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    ethers.getAddress(address);

    const tx = (await signer).sendTransaction({
      to: address,
      value: ethers.parseEther(amount),
    });

    return tx;
  } catch (error: any) {
    setError(true);
    setErrorMessage(error.message);
  }
};

export const sendERC20 = async({
  amount,
  address,
  setError,
  setErrorMessage,
  hasProvider
} : ISendEth) => {
  try {
    if (!hasProvider) {
      throw new Error("No crypto wallet found, Please install it.");
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    ethers.getAddress(address);
    const contract = new ethers.Contract(contractAddress, sample_abi, signer)

    const tx = await contract.transfer(address, amount)

    return tx;
  } catch (error: any) {
    setError(true);
    setErrorMessage(error.message);
  }
}

export const getTransactions = async (address: string): Promise<IQueryRes> => {
  const URI = getURL(address);
  const res = await axios.get(URI);
  return res.data;
};
