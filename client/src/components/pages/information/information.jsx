import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { informationContext } from "../../../context/information";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Information = () => {
  const { information, setInformation} = useContext(informationContext);
  const informationLength = information.length;
  return (
    <Container>
      
      <div className="department container-fluid">
        <div className="iconAndNumber pt-3 d-flex">
      <h3 id="number" className="text-center">{informationLength }</h3>
      <AiOutlineInfoCircle size={40}/>
        </div>
      </div>
    </Container>
  );
};

export default Information;
