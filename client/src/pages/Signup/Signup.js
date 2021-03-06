import "./index.css";
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Footer, Header } from "../../components";

export default function Signup() {
  const [valid, setValid] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === true) {
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });

        Auth.login(data.userAdd.token);
      } catch (e) {
        console.error(e);
      }
    }
    setValid(true);
  };

  return (
    <Container id="page">
      <Row className="row-content justify-content-center">
        <div id="content-top" className="col align-self-start">
          <div className="row">
            <Header />
          </div>
          <Row className="justify-content-center pt-5 mt-5">
            <Col xxl={4} xl={5} lg={6} md={7} sm={9} xs={10}>
              <Form
                noValidate
                validated={valid}
                onSubmit={handleSubmit}
                id="signup-form"
              >
                <Form.Group className="mb-4">
                  <Form.Label hidden={true}>First Name</Form.Label>
                  <Form.Control
                    className=""
                    placeholder="First Name"
                    required
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a first name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label hidden={true}>Last Name</Form.Label>
                  <Form.Control
                    className=""
                    placeholder="Last Name"
                    required
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a last name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label hidden={true}>Email Address</Form.Label>
                  <Form.Control
                    className=""
                    placeholder="Email Address"
                    required
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label hidden={true}>Password</Form.Label>
                  <Form.Control
                    className=""
                    placeholder="Password"
                    required
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="justify-content-center">
                  <Button
                    className="col"
                    variant="primary"
                    type="submit"
                    id="signup-btn"
                  >
                    Sign Up
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>

        <Footer />
      </Row>
    </Container>
  );
}
