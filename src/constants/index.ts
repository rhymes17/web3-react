export const getURL = (address : string) => {
    return `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=20&sort=asc&apikey=${import.meta.env.VITE_API_KEY}`
}

export const getTxURL = (address : string) => {
    return `https://etherscan.io/tx/${address}`
}

export const contractAddress = "0x0210811B2d5A7293a00C12ee77Ae343FF845602C"