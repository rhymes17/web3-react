import { useContext } from "react"
import { WalletContext } from "../../context/WalletContext"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

    const {isConnected, hasProvider} = useContext(WalletContext)

  return (
    (!isConnected || !hasProvider) ? <Navigate to="/"/> : <Outlet />
  )
}

export default PrivateRoute