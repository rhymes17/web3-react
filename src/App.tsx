import { Outlet } from "react-router-dom"
import Header from "./layout/Header"

function App() {
  
  return (
    <div className="w-[100%] bg-[#0A0A0F] h-[100vh] flex justify-center items-center">
      <div className="w-[45%] relative flex flex-col gap-8 bg-[#1A1C28] rounded-[2rem] h-[90vh] shadow-2xl border-[0.05rem] border-gray-500/40 mx-auto py-5 px-5 text-white">
          <Header />

          <div className="">
            <Outlet />
          </div>

          {/* Footer */}
          <div className="absolute border-2 left-0 right-0 bottom-0 h-[50px] rounded-b-[2rem]">

          </div>
      </div>
    </div>
  )
}

export default App
