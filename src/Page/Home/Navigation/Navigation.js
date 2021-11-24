import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import useAuth from "../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navigation-bar">
      <Navbar variant="dark" expand="lg">
        {/* className="banner" */}
        <Container>
          <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end navigation"
            id="basic-navbar-nav"
          >
            <Nav>
              <Navbar.Text>
                <div className="nav-component fs-5">
                  <Link to="/home">Home</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/userReview">UserReviews</Link>
                  <Link to="/blogs">Blogs</Link>

                  {user?.email ? (
                    <>
                      <Link to="/dashboard">Dashboard</Link>
                      <Button
                        onClick={logOut}
                        className="bg-primary border-0 ms-2"
                        variant="dark"
                      >
                        Logout
                      </Button>
                      <p className="ms-2 mt-2 bg-dark text-light ps-3">
                        Signed in as:{" "}
                        {user.displayName
                          ? `${user.displayName}`
                          : `${user.email}`}
                      </p>
                    </>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
