import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import "./bmr.css";
import Logo from "../assets/images/Logo.png";
import { GiToggles } from "react-icons/gi";

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Title" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="phone" />
          <Navbar.Collapse id="phone">
            <Nav style={{ marginLeft: "70px" }}>
              <Nav.Link href="/" className="link">
                Home{" "}
              </Nav.Link>

              <Nav.Link href="#exercises" className="link">
                {" "}
                Exercises
              </Nav.Link>
              <Nav.Link href="/calc" className="link">
                {" "}
                BMR Calc{" "}
              </Nav.Link>

              <Nav.Link href="/BMI" className="link">
                {" "}
                BMI Calc{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
