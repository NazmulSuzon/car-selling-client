import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleOnSubmit = e => {
        const user ={ email };
        fetch('https://glacial-anchorage-88737.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log("admin",data);
        })

        e.preventDefault();
    }

  return (
    <div className="d-flex justify-content-center align-items-center">
        <Form onSubmit={handleOnSubmit} className="border p-4 mt-5 rounded form">
        <h1 className="text-primary">Make An Admin</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="px-5" onBlur={handleOnBlur} type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Make Admin
      </Button>
    </Form>
    </div>
  );
};

export default MakeAdmin;
