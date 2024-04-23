import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { formatBalance } from "../utils";
import detectEthereumProvider from "@metamask/detect-provider";

interface IWallet  {
    accounts : any[],
    balance: string,
    chainId: string,
}

interface IMetaMaskContextData  {
    wallet: IWallet,
    hasProvider : boolean,
    error : boolean,
    errorMessage : string,
    isConnecting: boolean,
    connectMetaMask : () => void,
    isConnected: boolean,
}

const disconnectedState : IWallet  = {
    accounts: [],
    balance: "",
    chainId : ""
}

export const WalletContext = createContext<IMetaMaskContextData>({} as IMetaMaskContextData)

const WalletContextProvider = ({children} : {children : ReactNode}) => {
    const [hasProvider, setHasProvider] = useState<boolean>(false);
    const [wallet, setWallet] = useState<IWallet>(disconnectedState);
    const [error, setError] = useState<boolean>(false)
    const [isConnecting , setIsConnecting] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [isConnected, setIsConnected] = useState<boolean>(false)

    const _updateWallet = useCallback(async (providedAccounts ?: any) => {
        const accounts = providedAccounts || (await window.ethereum.request({method : "eth_accounts"})) 
        
        if(accounts.length === 0){
            setWallet(disconnectedState);
            setIsConnected(false);
            return;
        }
        setIsConnected(true)
        const balance = formatBalance(
            await window.ethereum.request({
              method: "eth_getBalance",
              params: [accounts[0], "latest"],
            })
        );
        const chainId = await window.ethereum.request({
            method: "eth_chainId",
        });

        setWallet({accounts, balance, chainId})
    }, [])

    const updateWalletAndAccounts = useCallback(() => _updateWallet(), [_updateWallet])
    const updateWallet = useCallback((accounts : any) => {
        _updateWallet(accounts)
    }, [_updateWallet])

    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({silent: true})
            setHasProvider(Boolean(provider))

            if(provider){
                updateWalletAndAccounts();
                window.ethereum.on("accountsChanged", updateWallet)
                window.ethereum.on("chainChanged", updateWalletAndAccounts)
            }
        };

        getProvider()

        return () => {
            window.ethereum?.removeListener("accountsChanged", updateWallet)
            window.ethereum?.removeListener("chainChanged", updateWalletAndAccounts)
        }
    }, [updateWallet, updateWalletAndAccounts])

    const connectMetaMask = async () => {
        setIsConnecting(true)

        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            updateWallet(accounts)
        } catch (error : any) {
            setError(true)
            setErrorMessage(error.message)
        }

        setIsConnecting(false)
    }
    
    return <WalletContext.Provider value={{isConnected, hasProvider, wallet, error, isConnecting, errorMessage, connectMetaMask}} >
        {children}
    </WalletContext.Provider>
}

export default WalletContextProvider