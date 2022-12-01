import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { ordersContext } from "../../../context/orders";
const Orders = () => {
  const { orders, setOrders} = useContext(ordersContext);
  const ordersLength = orders.length;
  return (
    <Container>
      <h3>Orders</h3>
      <h3>{ordersLength}</h3>
    </Container>
  );
};

export default Orders;
