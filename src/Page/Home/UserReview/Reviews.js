import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Reviews = (props) => {

    const {displayName, email, review, rating} = props.data;
    // console.log("from reviews",props);
    
    return (
        <>
      <Col>
        <Card
          className="p-5 items-card"
          style={{
            minHeight: "100px",
          }}
        >
          <Card.Body className="text-center mt-2">
            <Card.Title>Name: {displayName}</Card.Title>
            <Card.Title>Email: {email}</Card.Title>
            <Card.Text>Review: {review}</Card.Text>
            <Card.Text>Rating: {rating ? `${rating}`: 'Null'}</Card.Text>
            {/* <Rating></Rating> */}
            
          </Card.Body>
          
        </Card>
      </Col>
    </>
    );
};

export default Reviews;