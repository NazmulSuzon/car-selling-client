import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth.js";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { isAdmin, setIsAdmin,  logInUser} = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    console.log(loginData.email)
    e.preventDefault();
    console.log(loginData);
    // const useEmail = { loginData?.email }
    logInUser(loginData.email, loginData.password, location, history);

    fetch('https://car-selling-server-production-e8ff.up.railway.app/findadmin', {
      method:'POST',
      headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({ userEmail : loginData?.email}),
    })
    .then(res=>res.json())
    .then(data => {
      console.log('get data',data.role);
      if(data.role){
        let newUserInfo = { ...isAdmin }
        newUserInfo = true;
        setIsAdmin(newUserInfo);
        console.log('yes you are admin');
      }
      else {
        let newUserInfo = { ...isAdmin }
        newUserInfo = false;
        setIsAdmin(newUserInfo);
        console.log('sorry you are not admin');
      }
    })
   
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form
            onSubmit={handleLoginSubmit}
            className="border p-4 mt-5 rounded form"
          >
            <h1 className="text-primary">Please Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="email"
                name="email"
                className="px-5"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <p className="mt-3">
              New Here? <Link to="/register">Please Register</Link>
            </p>
          </Form>
    </div>
  );
};

export default Login;
