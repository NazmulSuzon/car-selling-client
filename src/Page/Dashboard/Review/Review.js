import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();

  const initialInfo = {
    displayName: user.displayName,
    email: user.email,
    review: null,
    rating:null
  };
  const [reviews, setReviews] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviews };
    if(field === 'rating' && (parseInt(value) >=0 && parseInt(value) <=5)){
      newInfo.rating = parseInt(value);
    
      setReviews(newInfo)
      console.log('ratings inserted');
    }
    if (field !== 'rating') {
      console.log('ratings not inserted');
      newInfo.email = user.email;
      newInfo.displayName = user.displayName;
      newInfo[field] = value;
      setReviews(newInfo);
    }
    
  };
console.log(reviews);
  const handleReviewSubmit = (e) => {
    // Collect Data
    const review = {
      ...reviews,
    };

    // send data to server
    // console.log(review);
    fetch("https://car-selling-server-production-e8ff.up.railway.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.reload(true);
          alert("Review Submit Successfully");
        }
      });

    e.preventDefault();
  };

  return (
    <Container className="mt-5 form border px-4 py-5 rounded d-flex justify-content-center align-items-center">
      <Form onSubmit={handleReviewSubmit} className="w-75">
        <h1 className="text-center text-primary">User Reviews</h1>
        <Form.Group className="my-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder={user.displayName} disabled />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder={user.email}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            onChange={handleOnBlur}
            name="review"
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <InputGroup className="mb-3">
          <FormControl
          onBlur={handleOnBlur}
          name="rating"
            placeholder="Rating"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            min='0'
            max='5'
            type='number'
            required
          />
        </InputGroup>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Review;
