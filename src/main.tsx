import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Connect from './pages/Connect'
import Transaction from './pages/Transaction'
import SendEth from './pages/SendEth/SendEth'
import WalletContextProvider from './context/WalletContext.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Connect />}/>
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/sendEth" element={<SendEth />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <WalletContextProvider>

     <RouterProvider router={router} />
    </WalletContextProvider>
  </React.StrictMode>,
)
