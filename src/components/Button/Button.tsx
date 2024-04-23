import { ReactNode } from "react"

type ButtonType = {
    icon : ReactNode,
    text: string,
    handleClick : () => void
}

const Button = ({icon, text, handleClick} : ButtonType) => {
  return (
    <div className={`p-3 flex justify-center items-center gap-3 cursor-pointer rounded-full shadow-2xl border-[0.05rem] border-gray-300/10 backdrop-blur-xl bg-gradient-to-r from-[#7161FF] to-[#6932FF] hover:bg-[#2D3447] }`} onClick={handleClick}>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default Button