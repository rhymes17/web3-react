import { Outlet } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"

function App() {
  
  return (
    <div className="w-[100%] bg-[#0A0A0F] h-[100vh] flex justify-center items-center">
      <div className="w-[45%] relative flex flex-col gap-4 bg-[#1A1C28] rounded-[2rem] h-[90vh] shadow-2xl border-[0.05rem] border-gray-300/20 mx-auto py-5 px-5 text-white">
          <Header />

          <div className="min-h-[65vh] overflow-scroll no-scrollbar">
            <Outlet />
          </div>

          {/* Footer */}
          <Footer />

          {/* blurred elements */}
          <div className="absolute left-0 right-0 px-5 bottom-5 ">
            <div className="w-[20px] h-[10px] bg-white"></div>
          </div>
      </div>
    </div>
  )
}

export default App
