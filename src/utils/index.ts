export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatHash = (hash : string) => {
  const res = hash.substring(0, 3) + "......." + hash.substring(hash.length - 5, hash.length)

  return res;
}