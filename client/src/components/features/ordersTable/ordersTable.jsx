import React from "react";
import { useContext } from "react";
import { ordersContext } from "../../../context/orders";
import Table from "react-bootstrap/Table";
import './ordersTable.css'
function OrdersTable() {
  const { orders, setOrders } = useContext(ordersContext);
  return (
    <div className="table-container h-25 text-center">

      Close reservations
    <Table id="tables" style={{ backgroundColor: "white" }} responsive  hover>
      <thead>
        <tr>
          <th>Price</th>
          <th>Products Number</th>
          <th>Delivery time</th>
          <th>Address</th>
          <th>Name</th>
          <th>Order Number</th>
        </tr>
      </thead>
      {
      Array.from(orders)?.map((item)=>
        <tbody key={item._id} style={{backgroundColor:'white'}}>
        <tr>
          <td>{item.price}</td>
          <td>{item.productsNumbers}</td>
          <td>{item.ETD}</td>
          <td>{item.address.city}</td>
          <td>{item.name}</td>
          <td>{item.orderNumber}</td>
        </tr>
      </tbody>
      )
    }
    </Table>
    </div>
  );
}

export default OrdersTable;
