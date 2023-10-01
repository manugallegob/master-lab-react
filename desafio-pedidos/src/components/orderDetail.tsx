import React, { useContext } from "react";
import OrderContext from "../context/orderContext";
import { OrderDetails } from "../data-mock";

export const OrderDetail: React.FC = () => {
  const { order, handleState, handleAmountOrder } = useContext(OrderContext);
  return (
    <>
      <div className="orderDetail-container">
        <span>validar</span>
        <span>Estado</span>
        <span>Descripción</span>
        <span>Importe:</span>
        {order.orderDetail.map((e: OrderDetails, index: number) => {
          return (
            <React.Fragment key={index}>
              <input
                type="checkbox"
                checked={e.validated}
                onChange={(e) => {
                  handleState(index);
                }}
              />
              <span>{e.validated ? "validado" : "pendiente"}</span>
              <span>{e.description}</span>
              <input
                type="number"
                value={e.amount}
                onChange={(event) => {
                  handleAmountOrder(index, Number(event.target.value));
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
