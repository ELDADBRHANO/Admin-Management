import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { informationContext } from "../../../context/information";
const Information = () => {
  const { information, setInformation} = useContext(informationContext);
  const informationLength = information.length;
  return (
    <Container>
      <h3>Information Page</h3>
      <h3>{informationLength}</h3>
       {/* {category?.map((category) => (
        <CardTemplate key={category.id} category={category} length={categoryLength} />
      ))} */}
    </Container>
  );
};

export default Information;
