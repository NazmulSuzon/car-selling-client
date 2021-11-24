import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    // setCarsData(products);
    const url = `https://glacial-anchorage-88737.herokuapp.com/products`
    fetch(url)
    .then(res => res.json())
    .then(data => setCarsData(data))
  }, []);

  // const handleAddToCart (data) => {
  //   console.log("from cart",data)
  // }
  return (
    <Container className="mb-5">
      <h2 className="text-center text-warning fw-bold mt-4 mb-5">Our Cars</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
      {carsData.slice(0, 6).map((data) => {
          return (
            <ProductCard
              key={data.id}
              data={data}
              // handleAddToCart={handleAddToCart}
            ></ProductCard>
          );
        })}
      </Row>
    </Container>
  );
};

export default Product;
