import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { productContext } from "../../../context//product";
import { BsBasket } from "react-icons/bs";
const   Product = () => {
  const { product} = useContext(productContext);
  const productLength = product.length;
  return (
    <Container>
      
      <div className="department container-fluid">
        <div className="iconAndNumber pt-3 d-flex">
      <h3 id="number" className="text-center">{productLength }</h3>
      <BsBasket size={30}/>
        </div>
      </div>
    </Container>
  );
};

export default  Product;
