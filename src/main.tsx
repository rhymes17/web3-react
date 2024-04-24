import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Connect from "./pages/Connect";
import Transaction from "./pages/Transaction";
import SendEth from "./pages/SendEth/SendEth";
import WalletContextProvider from "./context/WalletContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./layout/PrivateRoute/PrivateRoute.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Connect />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/sendEth" element={<SendEth />} />
        </Route>
      </Route>
    </>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WalletContextProvider>
        <RouterProvider router={router} />
      </WalletContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
