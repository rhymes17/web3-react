import { useState } from "react";
import GlassMorph from "../../layout/GlassMorph";
import { CiSearch } from "react-icons/ci";
import { getTxURL, getURL } from "../../constants";
import { formatHash } from "../../utils/format";
import { FaEthereum } from "react-icons/fa6";
import Button from "../../components/Button";

interface ITransaction {
  address: string;
  topics: string[];
  data: string;
  blockNumber: string;
  blockHash: string;
  timeStamp: string;
  gasPrice: string;
  gasUsed: string;
  logIndex: string;
  hash: string;
  transactionIndex: string;
}

const Transaction = () => {
  const [address, setAddress] = useState<string>("");
  const [transactions, setTransations] = useState<ITransaction[]>(
    [] as ITransaction[]
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSearch = async () => {
    const URI = getURL(address);
    setIsLoading(true);
    setError(false);

    await fetch(URI)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const txs = res.result;
        if (txs.length === 0) {
          setError(true);
          setErrorMessage(res.message);
        } else if (typeof txs === "string") {
          setError(true);
          setErrorMessage(txs);
        } else {
          setTransations(txs);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const handleClick = (address: string) => {
    const url = getTxURL(address);
    window.open(url);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search */}

      <GlassMorph gap={3} px={3} py={2} col={false} itemsAlign={true}>
        <input
          className="bg-[#1A1C28] flex-1 outline-none px-3 py-2 rounded-lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address to search it's transactions."
        />
        <CiSearch className="text-2xl cursor-pointer" onClick={handleSearch} />
      </GlassMorph>

      <GlassMorph gap={7} px={4} py={5} col={true} itemsAlign={false}>
        {isLoading ? (
          <h1>Laoding.....</h1>
        ) : error ? (
          <h1 className="px-3 py-3 text-2xl text-red-500">{errorMessage}</h1>
        ) : (
          transactions?.map((trans) => (
            <Button
              key={trans.hash}
              icon={<FaEthereum />}
              text={`Watch ${formatHash(trans.hash)} in EtherScan`}
              handleClick={() => handleClick(trans.hash)}
            />
          ))
        )}
      </GlassMorph>
    </div>
  );
};

export default Transaction;
