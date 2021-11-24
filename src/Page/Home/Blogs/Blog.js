import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blogs from "./Blogs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // setCarsData(products);
    const url = `https://glacial-anchorage-88737.herokuapp.com/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Container className="mb-5">
      <h1 className="text-center text-primary mb-5">Blogs</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {blogs.map((data) => {
          return (
            <Blogs
              key={data.id}
              data={data}
              // handleAddToCart={handleAddToCart}
            ></Blogs>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blog;
