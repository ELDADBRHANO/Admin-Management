import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { storeContext } from "../../../context/store";
const Store = () => {
  const { store, setStore} = useContext(storeContext);
  const storeLength = store.length;
  return (
    <Container>
      <h3>Stores</h3>
      <h3>{storeLength}</h3>
       {/* {category?.map((category) => (
        <CardTemplate key={category.id} category={category} length={categoryLength} />
      ))} */}
    </Container>
  );
};

export default Store;
