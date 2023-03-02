import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function ContactScreen() {
  return (
    <Container className="small-container">
      <Helmet>
        <title>COntact Us</title>
      </Helmet>
      <h2 className="my-3">Request Service</h2>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" required />
        </Form.Group>
        <label>Service Needed</label>
        <textarea
          name="Message"
          id=""
          cols="65"
          rows="10"
          className="mt-2"
        ></textarea>

        <div className="mb-3">
          <Button
            className="product-screen-button"
            type="submit"
          >
            Send
          </Button>
        </div>
      </Form>
    </Container>
  );
}
