import { useContext, useState } from "react";
import Balance from "./Balance";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Button from "../../components/Button";
import { RiSendPlaneLine } from "react-icons/ri";
import GlassMorph from "../../layout/GlassMorph";
import { sendEth } from "../../utils/helper";
import { WalletContext } from "../../context/WalletContext";

const SendEth = () => {
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {hasProvider} = useContext(WalletContext)

  const handleSubmit = async () => {
    try {
      await sendEth({
        amount,
        address,
        setError,
        setErrorMessage,
        hasProvider
      });

      setAddress("");
      setAmount("");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-7">
      <Balance />

      <div className="flex justify-between items-center px-2">
        <h1 className="">Transaction</h1>
        {/* <HiMiniEllipsisVertical className="cursor-pointer text-xl" /> */}
      </div>

      <GlassMorph px={5} py={5} gap={4} col={true} itemsAlign={false}>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1>To</h1>
            <button
              className="shadow-lg bg-red-500 rounded-md px-2 py-1"
              onClick={() => setAddress("")}
            >
              Clear
            </button>
          </div>
          <input
            className="bg-[#1A1C28] outline-none px-3 py-2 rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1>Amount</h1>
            <button
              className="shadow-lg bg-red-500 rounded-md px-2 py-1"
              onClick={() => setAmount("0")}
            >
              Clear
            </button>
          </div>
          <input
            className="bg-[#1A1C28] outline-none px-3 py-2 rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <Button
          text={"Send"}
          icon={<RiSendPlaneLine className="text-xl" />}
          handleClick={handleSubmit}
        />
      </GlassMorph>
    </div>
  );
};

export default SendEth;
