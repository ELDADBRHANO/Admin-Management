import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { ordersContext } from "../../../context/orders";
const Orders = () => {
  const { orders, setOrders} = useContext(ordersContext);
  const ordersLength = orders.length;
  return (
    <Container>
      <h5 className="text-center">Orders</h5>
      <h3 id="number" className="text-center">{ordersLength}</h3>
    </Container>
  );
};

export default Orders;
