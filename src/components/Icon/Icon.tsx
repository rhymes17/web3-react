import { ReactNode } from 'react'

type IconType = {
    icon : ReactNode,
    bg: boolean,
    handleClick : () => void
}

const Icon = ({icon, bg, handleClick} : IconType) => {
  return (
    <div className={`p-3 cursor-pointer rounded-full shadow-2xl border-[0.05rem] border-gray-300/10 ${bg ? "bg-[#2D3447]" : "bg-[#6F61F7]"}`} onClick={handleClick}>
        {icon}
    </div>
  )
}

export default Icon