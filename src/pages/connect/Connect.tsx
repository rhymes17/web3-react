import { useContext } from "react";
import hero from "../../assets/hero.jpg"
import Button from "../../components/Button"
import { SiGitconnected } from "react-icons/si";
import { WalletContext } from "../../context/WalletContext";
import { Link } from "react-router-dom";

const Connect = () => {

  const {hasProvider, connectMetaMask, isConnected, wallet} = useContext(WalletContext)

  return (
    <div className="rounded-lg p-3 w-full h-full backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/10">
        <div className="flex justify-center items-center">
          <img src={hero} alt="Hero Bg" className="h-[50vh] object-contain aspect-square"/>
        </div>

        {hasProvider ? (
          
          isConnected ? (
            <div className=" px-5 py-2 rounded-xl">
          <Link to="/transactions">
            <h1>Already Connected </h1>
            <h1 className="underline decoration-[#00D9DE]">Would you like to make a transaction instead!</h1>
          </Link>
          </div>
          ) : (
            <Button icon={<SiGitconnected className="text-2xl"/>} text={"Connect"} handleClick={connectMetaMask} />
          )
        ): (
          
          <h1>Metamask not installed!</h1>
        )}
    </div>
  )
}

export default Connect