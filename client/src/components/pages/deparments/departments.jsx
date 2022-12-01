import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { departmentContext } from "../../../context/departments";
import CardTemplate from "../../features/card/card";
const Departments = () => {
  const { department, setDepartment} = useContext(departmentContext);
  const departmentLength = department.length;
  return (
    <Container>
      <h3>Department</h3>
      <h3>{departmentLength}</h3>
    </Container>
  );
};

export default Departments;
