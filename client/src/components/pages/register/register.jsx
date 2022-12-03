import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setHandlePassword] = useState("");
  const [passwordConfirmation, setHandlePasswordConfirmation] = useState("");
   const register = async (e) => {
    console.log("dssssssss");
    e.preventDefault();
    try {
      return fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body:JSON.stringify({user:{
          name: name,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation
        }}),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setHandlePassword(e.target.value);
  };

  const handlePasswordConfirmation = (e) => {
    setHandlePasswordConfirmation(e.target.value);
  };

 
  return (
    <Container className="m-5">
      <Form onSubmit={register}>
        <Form.Group className="mb-3" id="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control id="name" 
            onChange={handleName}
            placeholder="Enter Your Full Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control id="Email" 
            onChange={handleEmail}
            placeholder=" Enter your Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control id="Password" 
            onChange={handlePassword}
            type="password"
            placeholder="Please enter a password"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password verification</Form.Label>
          <Form.Control id="PasswordVerification" 
            onChange={handlePasswordConfirmation}
            type="password"
            placeholder="Please enter password again."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddUser;
