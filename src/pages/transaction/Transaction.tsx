import { useEffect, useState } from "react";
import GlassMorph from "../../layout/GlassMorph";
import { CiSearch } from "react-icons/ci";
import { getTxURL } from "../../constants";
import { formatHash } from "../../utils/format";
import { FaEthereum } from "react-icons/fa6";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../utils/helper";

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

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fetch, setFetch] = useState<boolean>(false);

  const { data: res, isLoading } = useQuery({
    queryKey: ["txRes"],
    queryFn: () => getTransactions(address),
    enabled: fetch,
  });

  const handleSearch = async () => {
    setFetch(true);
  };

  useEffect(() => {
    if (res) {
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
    }
    setFetch(false);
  }, [res]);

  const handleClick = (address: string) => {
    const url = getTxURL(address);
    window.open(url);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search */}

      <GlassMorph gap={3} px={3} py={2} col={false} itemsAlign={true}>
        <Input
          value={address}
          setValue={setAddress}
          placeholder={"Enter address to search it's transactions."}
          name={"Search"}
        />
        <CiSearch className="text-2xl cursor-pointer" onClick={handleSearch} />
      </GlassMorph>

      <GlassMorph gap={7} px={4} py={5} col={true} itemsAlign={true}>
        {isLoading ? (
          <h1>Laoding.....</h1>
        ) : error ? (
          <h1 className="px-3 py-3 mx-auto text-xl text-red-500">
            {errorMessage}
          </h1>
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
