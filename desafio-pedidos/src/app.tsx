import React from "react";
import { Header } from "./components/header";
import { OrderDetail } from "./components/orderDetail";
import StateCompo from "./context/StateOrderCompo";

export const App = () => {
  return (
    <>
      <h1>Pedido a Proveedor</h1>;
      <StateCompo>
        <Header />
        <hr />
        <OrderDetail />
      </StateCompo>
    </>
  );
};
