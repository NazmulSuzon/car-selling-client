import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../images/2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Navbar.Text>
                <div className="nav-component fs-5 d-flex justify-content-end align-items-center">
                  <Link className="text-decoration-none bg-primary rounded p-3 " to="/explore">Explore More Products</Link>
                </div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <img style={{width:"100%", height:"100vh"}} src={banner} alt="" /> */}
    </div>
  );
};

export default Banner;
