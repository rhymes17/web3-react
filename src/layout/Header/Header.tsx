import { RiMenu2Line } from "react-icons/ri";
import Icon from "../../components/Icon";

const Header = () => {
  return (
    <div className=" flex justify-start py-2">
        <Icon icon={<RiMenu2Line className="text-xl"/>} bg={true} handleClick={() => console.log("")}/>
    </div>
  )
}

export default Header