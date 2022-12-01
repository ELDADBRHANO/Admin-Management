import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { productContext } from "../../../context//product";
const   Product = () => {
  const { product, setProduct} = useContext(productContext);
  const productLength = product.length;
  return (
    <Container>
      <h3>Products</h3>
      <h3>{product[0]?.productNumber}</h3>
    </Container>
  );
};

export default  Product;
