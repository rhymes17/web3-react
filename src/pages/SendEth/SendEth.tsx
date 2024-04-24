import { useContext, useState } from "react";
import Balance from "./Balance";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Button from "../../components/Button";
import { RiSendPlaneLine } from "react-icons/ri";
import GlassMorph from "../../layout/GlassMorph";
import { sendEth } from "../../utils/helper";
import { WalletContext } from "../../context/WalletContext";
import InputWrapper from "./InputWrapper";

const SendEth = () => {
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { hasProvider } = useContext(WalletContext);

  const handleSubmit = async () => {
    try {
      await sendEth({
        amount,
        address,
        setError,
        setErrorMessage,
        hasProvider,
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
        <InputWrapper label={"To"} value={address} setValue={setAddress} placeholder={"Enter Address"}/>
        <InputWrapper label={"Amount"} value={amount} setValue={setAmount} placeholder={"Enter Amount"}/>
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
