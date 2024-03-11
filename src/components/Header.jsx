import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png' 

const Header = (param) => {
  return (
    <Navbar expand="lg" style={{background:"linear-gradient(93deg, rgba(58,162,180,0.6797312675070029) 0%, rgba(253,29,227,0.38001137955182074) 48%, rgba(252,176,69,0.2399553571428571) 100%)"}}>
      <Container fluid>
        <img src={logo} alt="" style={{height:"50px", marginLeft:"20px"}}/>
        <Navbar.Brand href="/" style={{marginLeft:"10px", fontFamily:"Lucida Handwriting"}}>CART</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" style={{margin:"0px 150px 0px 0px", width:"800px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              disabled
            />
            <Button variant="outline-success"  disabled>Search</Button>
          </Form>
          <Nav.Link href="/login" style={{position:"relative"}}>
              {param.user.name?<>{param.user.name}</>:<>Login</>}
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;