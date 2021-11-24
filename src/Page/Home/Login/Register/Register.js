import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();

  const handleBlur = (e) => {
    // console.log(e.target.value)
    const newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
    
    
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    registerUser(userInfo, history);
  };

  console.log(userInfo)
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form onSubmit={handleRegistration} className="border p-4 mt-5 rounded form">
        <h1 className="text-primary">Please Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleBlur}
            type="text"
            name='displayName'
            placeholder="Enter Your Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleBlur}
            type="email"
            name='email'
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleBlur}
            type="password"
            name='password'
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Your Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            onChange={handleBlur}
            type="password"
            placeholder="Confirm Your Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registration
        </Button>
        <p className="mt-3">
          Already Registered? <Link to="/login">Please Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
