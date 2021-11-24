import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreProduct from './ExploreProduct';

const Explore = () => {
    const [carsData, setCarsData] = useState([]);

    useEffect(() => {
        // setCarsData(products);
        const url = `https://glacial-anchorage-88737.herokuapp.com/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setCarsData(data))
      }, []);

    return (
        <Container className="mb-5">
      <h2 className="text-center text-primary fw-bold mt-4 mb-5">Explore More Products</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
      {carsData.map((data) => {
          return (
            <ExploreProduct
              key={data.id}
              data={data}
              // handleAddToCart={handleAddToCart}
            ></ExploreProduct>
          );
        })}
      </Row>
    </Container>
    );
};

export default Explore;