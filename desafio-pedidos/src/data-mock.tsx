export interface OrderDetails {
  validated: boolean;
  description: string;
  amount: number;
}

export interface OrderInfo {
  id: string;
  date: string;
  client: string;
  orderDetail: OrderDetails[];
}


export const data: OrderInfo = 
  {
    id: "1",
    date: "01/01/2023",
    client: "System ABC",
    orderDetail: [
      {
        validated: false,
        description: "cuaderno grande",
        amount: 100,
      },
      {
        validated: false,
        description: "cuaderno mediano",
        amount: 50,
      },
      {
        validated: false,
        description: "cuaderno pequeño",
        amount: 25,
      },
    ],
  }