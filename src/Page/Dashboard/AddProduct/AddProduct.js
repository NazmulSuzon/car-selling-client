import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
    const initialInfo = { img:'', title:'', details:''}
  const [addProduct, setAddProduct] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...addProduct};
    newInfo[field] = value;
    console.log("from add product",newInfo);
    setAddProduct(newInfo);
  };

  const handleProductSubmit = (e) => {
    const product = {...addProduct};

    fetch('https://glacial-anchorage-88737.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        window.location.reload(true)
          alert('Added Product Successfully');
      }
    })

    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form
        onSubmit={handleProductSubmit}
        className="border p-5 mt-5 rounded form"
      >
        <h1 className="text-primary">Add Product</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            className="px-5"
            name="img"
            onBlur={handleOnBlur}
            placeholder="Enter Image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            type="text"
            name="title"
            placeholder="Enter Product Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Details</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            as="textarea"
            name="details"
            placeholder="Enter Product Details"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
