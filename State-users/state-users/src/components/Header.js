import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" >  Register Yourself</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#account" onClick={()=>history.push("/")}> Account </Nav.Link>
          <Nav.Link href="#details" onClick={()=>history.push("/details")}> Details </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
