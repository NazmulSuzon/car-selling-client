import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { user } = useAuth();
  const location = useLocation();
    const history = useHistory();

  const [carsDetails, setCarsDetails] = useState([]);
  const [order, setOrder] = useState(
    {
        id:null,
        purchasedCar: null,
        userInfo: null,
    }
);

  const { productsId } = useParams();
  
  useEffect(() => {
    // setCarsData(products);
    const url = `https://glacial-anchorage-88737.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCarsDetails(data);
        
        // console.log("from order details",data);
      });
  }, []);

  const singleItemsData = carsDetails.filter((data) => data.id === productsId);
  // console.log(singleItemsData);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...order};
    // console.log('hello',singleItemsData[0]);
    newInfo.id= singleItemsData[0].id;
    newInfo.purchasedCar = singleItemsData;
    newInfo.userInfo = user;
    newInfo[field] = value;
    setOrder(newInfo);
    console.log(e.target.value)
  }

  const handleOrderSubmit = e => {
    console.log('ordered',order);
        // Send data to server
        fetch('https://glacial-anchorage-88737.herokuapp.com/placeOrders', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(data => {
          if(data){
            alert("Successfully Purchased!")
            const destination = location?.state?.from || '/';
            history.push(destination);
          }
        })

    e.preventDefault();
  }
  // console.log(order);
  return (
    <Container className="my-5 d-flex justify-content-between ">
      <div>
        <Card className="p-3 form" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={singleItemsData[0]?.img} />
          <Card.Body>
            <Card.Title>{singleItemsData[0]?.title}</Card.Title>
            <Card.Text>{singleItemsData[0]?.details}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* PlaceOrder Form */}

      <div>
        <Form onSubmit={handleOrderSubmit} className="p-5 border rounded form">
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="px-5 user-field"
                type="text"
                name="displayName"
                placeholder={user?.displayName}
                disabled
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="px-5 user-field"
                type="email"
                name="email"
                placeholder={user?.email}
                disabled
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                className="px-5"
                type="phone"
                name="phone"
                onChange={handleOnBlur}
                placeholder="Enter Your phone number"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={handleOnBlur} name="address" placeholder="1234 Main St"  required/>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={handleOnBlur} name="city" placeholder="Dhaka" required/>
            </Form.Group>
          </Row>

          <Button variant="primary" className="mt-2" type="submit">
            Place Order
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default OrderDetails;
