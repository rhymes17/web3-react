import { ReactNode } from "react"

interface IGlass {
    children: ReactNode,
    gap: number,
    px: number,
    py: number
}

const GlassMorph = ({children, gap, px, py} : IGlass) => {
  return (
    <div className={`backdrop-blur-xl flex flex-col gap-${gap} px-${px} py-${py} bg-gradient-to-r from-[#30374A]/80 to-[#383E50]/80 rounded-md`}>
        {children}
    </div>
  )
}

export default GlassMorph