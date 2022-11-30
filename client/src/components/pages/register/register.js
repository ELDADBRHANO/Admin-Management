
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import register from '../../../service/users';



function AddUser() {
  const [userName,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setHandlePassword] = useState("")
  const [passwordConfirmation,setHandlePasswordConfirmation] = useState("")
  

  const handleName=(e)=>{
    setName(e.target.value);
  }

  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }

  const handlePassword =(e)=>{
    setHandlePassword(e.target.value)
  }

  const handlePasswordConfirmation = (e)=>{
    setHandlePasswordConfirmation(e.target.value)
  }
  const register = (e)=>{
    e.preventDefault()
    try {
       fetch('http://localhost:5000/users/register',{
        method:'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          name:userName,
          email:email,
          password:password,
          passwordConfirmation:passwordConfirmation
        })
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container  className='m-5'>

    <Form onSubmit={register}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control onChange={handleName}  placeholder="Enter Your Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control  onChange={handleEmail} placeholder=" Enter your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control  onChange={handlePassword} placeholder="Please enter a password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password verification</Form.Label>
        <Form.Control onChange={handlePasswordConfirmation} type="Please enter password again." placeholder="What time does the flight take off?" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default AddUser;