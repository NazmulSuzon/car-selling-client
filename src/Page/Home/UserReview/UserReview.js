import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Reviews from "./Reviews";

const UserReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const url = `https://car-selling-server-production-e8ff.up.railway.app/reviews`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data){
        setReview(data);
      }
        // console.log("from data", data)
    })
  }, []);
  return (
    <Container className="mb-5">
      <h2 className="text-center text-warning fw-bold mt-4 mb-5">User Review</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {review.map((data) => {
          return <Reviews key={data.email} data={data}></Reviews>;
        })}
      </Row>
    </Container>
  );
};

export default UserReview;
