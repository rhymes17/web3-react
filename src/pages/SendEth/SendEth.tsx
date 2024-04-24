import { useContext, useState } from "react";
import Balance from "./Balance";
import { FaAngleDown } from "react-icons/fa";
import Button from "../../components/Button";
import { RiSendPlaneLine } from "react-icons/ri";
import GlassMorph from "../../layout/GlassMorph";
import { sendERC20, sendEth } from "../../utils/helper";
import { WalletContext } from "../../context/WalletContext";
import InputWrapper from "./InputWrapper";

const SendEth = () => {
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [ether, setEther] = useState<string>("Ether");

  const { hasProvider } = useContext(WalletContext);

  const handleERCSubmit = async () => {
    try {
      await sendERC20({
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
    <div className="flex flex-col gap-4">
      <Balance />

      <div className="flex justify-between items-center px-2">
        <h1 className="">Transaction</h1>

        <div className="flex gap-2 items-center justify-center cursor-pointer rounded-full px-5 py-1 bg-[#2D3447]">
          <select
            value={ether}
            onChange={(e) => setEther(e.target.value)}
            className="bg-transparent focus:ring-blue-600 focus:bg-[#2D3447] focus:outline-none"
          >
            <option>Ether</option>
            <option>Token</option>
          </select>
        </div>
      </div>

      <GlassMorph px={5} py={5} gap={4} col={true} itemsAlign={false}>
        <InputWrapper
          label={"To"}
          value={address}
          setValue={setAddress}
          placeholder={"Enter Address"}
        />
        <InputWrapper
          label={"Amount"}
          value={amount}
          setValue={setAmount}
          placeholder={"Enter Amount"}
        />
        <Button
          text={"Send"}
          icon={<RiSendPlaneLine className="text-xl" />}
          handleClick={ether === "Ether" ? handleSubmit : handleERCSubmit}
        />
      </GlassMorph>
    </div>
  );
};

export default SendEth;
