import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sideBar.css'
const canvasLinks = ['dashboard','statics','departments','categories','stores','users system', 'users', 'products','sales','orders','information','settings']
function SideBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="inherit" onClick={handleShow}>
      <img id="burger_logo" alt="burger" src="./images/menu.png"/>
      </Button>

      <Offcanvas show={show} placement='end'  onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            canvasLinks.map(item=>
              <ul>
                <li className='list'>{item}</li>
              </ul>
              )
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;