import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Blogs = (props) => {
    const { img, title, details } = props.data;
    return (
        <>
      <Col>
        <Card
          className="p-5 items-card"
          style={{
            minHeight: "500px",
          }}
        >
          <Card.Img
            className="card-img"
            style={{ height: "230px" }}
            variant="top"
            src={img}
          />
          <Card.Body className="text-center mt-2">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Button className="w-100 bg-primary border-0 my-2">
                View More...
              </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
    );
};

export default Blogs;