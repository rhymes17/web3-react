import hero from "../../assets/hero.jpg"
import Button from "../../components/Button"
import { SiGitconnected } from "react-icons/si";

const Connect = () => {
  return (
    <div className="rounded-lg p-3 w-full h-full backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/10">
        <div className="flex justify-center items-center">
          <img src={hero} alt="Hero Bg" className="h-[50vh] object-contain aspect-square"/>
        </div>

        <Button icon={<SiGitconnected className="text-2xl"/>} text={"Connect"} handleClick={() => {}} />
    </div>
  )
}

export default Connect