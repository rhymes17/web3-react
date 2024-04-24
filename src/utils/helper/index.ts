import { ethers } from "ethers"

interface ISendEth {
    amount: string,
    address: string,
    setError : (value: React.SetStateAction<boolean>) => void,
    setErrorMessage : (value: React.SetStateAction<string>) => void,
    hasProvider: boolean
}

export const sendEth = async({amount, address, setError, setErrorMessage, hasProvider} : ISendEth) => {
    try {
      if(!hasProvider){
        throw new Error("No crypto wallet found, Please install it.")
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = provider.getSigner()
      ethers.getAddress(address)

      const tx = (await signer).sendTransaction({
        to : address,
        value: ethers.parseEther(amount)
      })

      return tx;
    } catch (error : any) {
      setError(true)
      setErrorMessage(error.message)
    }
  }