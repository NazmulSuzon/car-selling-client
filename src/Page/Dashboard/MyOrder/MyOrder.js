import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const MyOrder = (props) => {
  console.log("from my order", props.data.purchasedCar[0]);
  // console.log(props.data.phone);

  const { title, img, id } = props.data.purchasedCar[0];
  const { email } = props.data.userInfo;
  console.log(id);
  const { phone, address, city } = props?.data;

  const handleRemove = (id) => {
    console.log("removed id", id);
    const proceed = window.confirm("Are you sure ,you want to delete?");

    if (proceed) {
      const url = `https://car-selling-server-production-e8ff.up.railway.app/placeOrders/${id}`;

      fetch(url, {
        method: "DELETE",
      })
      .then((res) => res.json())
      .then(data => {
        if(data){
          console.log(data)
          // window.lo;
          
          // const remainOrders = order.filter(orders => orders._id !== id);
          // console.log(remainOrders)
          // setOrder(remainOrders);
          window.location.reload(true)
          alert('delete Successfully');
        }
      })
    }
  };

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
            <Card.Img
            style={{ height: "230px" }}
            variant="top"
            src={img}
          />
            <Card.Title>Products Name: {title}</Card.Title>
            <Card.Title>Email: {email}</Card.Title>
            <Card.Text>Phone: {phone}</Card.Text>
            <Card.Text>address: {address}</Card.Text>
            <Card.Text>city: {city}</Card.Text>
            <Button onClick={() => handleRemove(id)}>Remove</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MyOrder;
