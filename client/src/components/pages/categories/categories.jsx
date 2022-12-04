import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { categoryContext } from "../../../context/category";
import CardTemplate from "../../features/card/card";
import { BiCategoryAlt } from "react-icons/bi";

const Categories = () => {
  const { category} = useContext(categoryContext);
  const categoryLength = category.length;
  return (
    <Container>
      
      <div className="department container-fluid">
        <div className="iconAndNumber pt-3 d-flex">
      <h3 id="number" className="text-center">{categoryLength }</h3>
      <BiCategoryAlt size={40}/>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
