import { useContext } from "react"
import { WalletContext } from "../../context/WalletContext"

const Balance = () => {
    const {wallet} = useContext(WalletContext)

  return (
    <div className=" flex flex-col justify-center items-center">
        <h1 className="text-md">Current Wallet Balance</h1>
        <h1 className="text-[4rem]">${wallet.balance}</h1>
        <div className="cursor-pointer relative z-50 flex gap-3 justify-center items-center rounded-xl py-2 px-4 backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/10">
            {/* Element extra */}
          <div className="w-[10px] h-[10px] rounded-full bg-[#FDD401]"></div>                

            <h1 className="">{wallet?.accounts[0]?.substring(0, 6)}...</h1>

            <div className="absolute left-4 blur-md w-[10px] h-[10px] bg-[#FDD401] rounded-full "></div>
        </div>
        
    </div>
  )
}

export default Balance