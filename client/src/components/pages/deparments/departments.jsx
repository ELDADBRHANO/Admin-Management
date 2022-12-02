import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { departmentContext } from "../../../context/departments";
import './department.css';
import { AiOutlineUnorderedList } from "react-icons/ai";
const Departments = () => {
  const { department, setDepartment} = useContext(departmentContext);
  const departmentLength = department.length;
  return (
    <Container>
      
      <div className="department container-fluid">
        <div className="iconAndNumber pt-3 d-flex">
      <h3 id="number" className="text-center">{departmentLength }</h3>
      <AiOutlineUnorderedList size={30}/>
        </div>
      </div>
    </Container>
  );
};

export default Departments;
