import "./NavBar.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
  const Links = [
    {name : "ACCUIEL", href : "#accuiel"},
    {name : "PRESENTATION", href : "#presentation"},
    {name : "PORTFOLIO", href : "#portfolio"},
    {name : "COMPETENTCES", href : "#competence"},
    {name : "EXPERIENCES", href : "#experience"},
  ];

  const [active , setActive] = useState(0);
  console.log(active);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          {
              Links.map(({name , href},index) => (
                <Nav.Link href={href} className={active === index ? " navbar_link text-white fw-bold mx-5 navlink_active" : "navbar_link text-white fw-bold mx-5"} onClick={() => setActive(index)}>{name}</Nav.Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;
