import { useState } from "react";
import Balance from "./Balance"
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Button from "../../components/Button";
import { RiSendPlaneLine } from "react-icons/ri";

const Transaction = () => {
  const [amount, setAmount] = useState(0)
  return (
    <div className="flex flex-col gap-7">
      <Balance />

      <div className="flex justify-between items-center px-2">
        <h1 className="">Transaction</h1>
        <HiMiniEllipsisVertical className="cursor-pointer text-xl"/>
      </div>

      <div className="backdrop-blur-xl flex flex-col gap-5 p-5 bg-gradient-to-r from-[#30374A]/80 to-[#383E50]/80 rounded-md">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
            <h1>To</h1>
            <button className="shadow-lg bg-red-500 rounded-md px-2 py-1" onClick={() => setAmount(0)}>Clear</button>
            </div>
            <input className="bg-[#1A1C28] outline-none px-3 py-2 rounded-lg" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
          </div>

          <Button text={"Send"} icon={<RiSendPlaneLine className="text-xl"/>} handleClick={() => {}}/>
      </div>
    </div>
  )
}

export default Transaction