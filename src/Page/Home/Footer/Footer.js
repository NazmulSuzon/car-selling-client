import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark p-5 mt-5 text-light">
      <Row>
        <Container className="d-flex justify-content-between">
          <Col>
            <div className="icon">
              <div className="d-flex">
                <img src={logo} alt="" />
                <br />
              </div>
              <p className='mt-4'>
              Cras sit amet mi non orci pretium consectetur. Donec iaculis ante ac sollicitudin luctus. Phasellus ut lacus lacus. Phasellus sagittis ex id tortor tincidunt luctus. Donec consectetur consequat bibendum
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h2 className="text-center">Information</h2>
              <hr />
              <ul className="me-5">
                <ol>About Us</ol>
                <ol>History</ol>
                <ol>Team</ol>
                <ol>Careerrs</ol>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h2 className="text-center">Support</h2>
              <hr />
              <ul className="me-5">
                <ol>Contact Us</ol>
                <ol>Help Center</ol>
                <ol>FAQ</ol>
                <ol>Community</ol>
                <ol>Forum</ol>
              </ul>
            </div>
          </Col>
          <hr />
        </Container>
      </Row>
      <hr />
      <p className="text-center">
        <FontAwesomeIcon icon={faCopyright} /> Copyright
      </p>
    </div>
  );
};

export default Footer;
