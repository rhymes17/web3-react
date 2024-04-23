import { useState } from "react";
import GlassMorph from "../../layout/GlassMorph";
import { CiSearch } from "react-icons/ci";
import { getURL } from "../../constants";

interface ITransaction {
  address : string,
  topics: string[],
  data: string,
  blockNumber: string,
  blockHash : string,
  timeStamp : string,
  gasPrice : string,
  gasUsed: string,
  logIndex: string,
  transactionHash: string,
  transactionIndex: string
}

const Transaction = () => {
  const [address, setAddress] = useState<string>("");
  const [transactions, setTransations] = useState<ITransaction[]>([] as ITransaction[]);
  
  const handleSearch = async() => {
    const URI = getURL(address);

    try {
      const res = await fetch(URI);
      console.log(res.json);
    } catch (error : any) {
      console.log(error.message)
    }
  }
  
  return (
    <div className="flex flex-col gap-8">
      {/* Search */}
      <GlassMorph gap={3} px={2} py={2} col={false} itemsAlign={true}>
        <input
          className="bg-[#1A1C28] flex-1 outline-none  px-3 py-2 rounded-lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <CiSearch className="text-2xl" onClick={handleSearch}/>
      </GlassMorph>

      <GlassMorph gap={3} px={2} py={2} col={true} itemsAlign={false}>
        {transactions.map((trans) => (
          <div className="bg-[#1A1C28] px-2 py-2 overflow-hidden rounded-md">
            <h1 className="w-[90px] text-ellipsis">{trans.transactionHash}</h1>
          </div>
        ))}
      </GlassMorph>
    </div>
  );
};

export default Transaction;
