import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { categoryContext } from "../../../context/category";
import CardTemplate from "../../features/card/card";
const Categories = () => {
  const { category, setCategory} = useContext(categoryContext);
  const categoryLength = category.length;
  return (
    <Container>
      <h3>Categories</h3>
      <h3>{categoryLength}</h3>
       {/* {category?.map((category) => (
        <CardTemplate key={category.id} category={category} length={categoryLength} />
      ))} */}
    </Container>
  );
};

export default Categories;
