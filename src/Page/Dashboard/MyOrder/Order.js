import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import MyOrder from "./MyOrder";

const Order = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [isSpinnerTrue, setIsSpinnerTrue] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    setIsSpinnerTrue(true);
    const url = `https://glacial-anchorage-88737.herokuapp.com/placeOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setIsSpinnerTrue(false);
        // console.log("from data", data)
      });
  }, []);

  return (
    <Container className="mb-5">
      <h2 className="text-center text-warning fw-bold mt-4 mb-5">
        My Order
      </h2>
      {!isSpinnerTrue ? <Row xs={1} md={2} lg={3} className="g-4">
        {myOrder.map((data) => {
          return <MyOrder key={data.email} data={data}></MyOrder>;
        })}
      </Row>
    :
    <div className='text-center'>
    <Spinner animation="grow" />
    <Spinner animation="grow" />
    <Spinner animation="grow" />
</div>
    }
    </Container>
  );
};

export default Order;
