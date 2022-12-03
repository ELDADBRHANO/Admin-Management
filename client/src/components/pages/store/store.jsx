import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { storeContext } from "../../../context/store";
import './store.css'
import { BiStore } from "react-icons/bi";
const Store = () => {
  const { store, setStore} = useContext(storeContext);
  const storeLength = store.length;
  return (
    <Container>
      
      <div className="department container-fluid">
        <div className="iconAndNumber pt-3 d-flex">
      <h3 id="number" className="text-center">{storeLength }</h3>
      <BiStore size={40}/>
        </div>
      </div>
    </Container>
  );
};

export default Store;
