import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExploreProduct = (props) => {
    const { img, title, details,id } = props.data;
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

            <Link
            className="d-inline-block mx-auto w-100 mt-3"
            to={`/placeOrder/${id}`}
            >
              <Button className="w-100 bg-primary border-0 my-2">
                Buy Now
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
    );
};

export default ExploreProduct;