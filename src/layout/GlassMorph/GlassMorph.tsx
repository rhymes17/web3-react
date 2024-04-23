import { ReactNode } from "react"

interface IGlass {
    children: ReactNode,
    gap: number,
    px: number,
    py: number,
    col : boolean,
    itemsAlign: boolean
}

const GlassMorph = ({children, gap, px, py, col, itemsAlign} : IGlass) => {
  return (
    <div className={`backdrop-blur-xl flex ${itemsAlign && "items-center"} ${col && "flex-col"} gap-${gap} px-${px} py-${py} bg-gradient-to-r from-[#30374A]/80 to-[#383E50]/80 rounded-md`}>
        {children}
    </div>
  )
}

export default GlassMorph