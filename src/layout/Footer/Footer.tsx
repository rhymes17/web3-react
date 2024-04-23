import { FaClipboardList } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="absolute z-50 left-0 right-0 bottom-0 h-[50px] rounded-b-[2rem] backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/10">
        <div className="w-[50%] mx-auto h-full flex justify-between items-center">
        <Link to="/sendEth">
            <FaEthereum className="text-2xl hover:text-white/30"/>
          </Link>
          <Link to="/">
            <TiHome className="text-2xl hover:text-white/30"/>
          </Link>
          <Link to="/transactions">
            <FaClipboardList className="text-2xl hover:text-white/30"/>
          </Link>
        </div>
       
    </div>
  )
}

export default Footer