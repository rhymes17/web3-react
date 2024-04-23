export const getURL = (address : string) => {
    return `"https://api.etherscan.io/api?module=logs&action=getLogs&address=${address}&fromBlock=12878196&toBlock=12878196&page=1&offset=20&apikey=${import.meta.env.VITE_API_KEY}"    `
}