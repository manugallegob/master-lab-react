import React, { useContext } from "react";
import OrderContext from "../context/orderContext";

export const Header: React.FC = () => {
  const { order, getTotalAmount, getStateOrder, getEstatusOrder } =
    useContext(OrderContext);
  return (
    <div className="header-container">
      <span>Número:{order.id}</span>
      <span>Proveedor:{order.client} </span>
      <span>Fecha: {order.date} </span>
      <span>Importe Total: {getTotalAmount()}€</span>
      <span>Estado: {getStateOrder()}%</span>
      <button disabled={!getEstatusOrder()}>Enviar</button>
    </div>
  );
};
