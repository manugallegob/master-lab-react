import React, { ReactNode } from "react";
import OrderContext from "./orderContext";
import { data } from "../data-mock";

interface StateCompoProps {
  children: ReactNode;
}

const StateCompo: React.FC<StateCompoProps> = ({ children }) => {
  const [order, setOrder] = React.useState(data);

  const handleState = (i: number) => {
    const updateOrder = { ...order };
    updateOrder.orderDetail[i].validated = !updateOrder.orderDetail[i].validated;
    setOrder(updateOrder);
  }; 

  const getTotalAmount = () => {
    const totalAmount:number = order.orderDetail.reduce(
      (total: number, detail) => total + detail.amount,
      0
    );
    return totalAmount;
  };

  const getStateOrder = () => {
    let validItems = order.orderDetail.filter((e) => e.validated);
    return ((validItems.length / order.orderDetail.length) * 100).toFixed(2);
  };

  const handleAmountOrder = (index: number, value: string) => {
    const updateAmount = { ...order };
    updateAmount.orderDetail[index].amount = parseInt(value, 10);
    setOrder(updateAmount);
  };

  const getEstatusOrder = () => {
    let validItems = order.orderDetail.filter((e) => e.validated);
    return validItems.length === order.orderDetail.length;
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        handleAmountOrder,
        handleState,
        getTotalAmount,
        getStateOrder,
        getEstatusOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default StateCompo;
