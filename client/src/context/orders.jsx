import { createContext, useEffect, useState } from "react";
import getOrders from "../service/orders";

export const ordersContext = createContext();

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then((res) => setOrders(res.data));
  }, []);
  return (
    <ordersContext.Provider value={{ orders, setOrders}}>
      {children}
    </ordersContext.Provider>
  );
}

export default OrdersProvider;
