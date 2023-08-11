"use client";
import Link from "next/link";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginData = {
  username: string;
  email: string;
  mobileno: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your Username"),
  email: Yup.string().required("Please enter your Email"),
  mobileno: Yup.string().required("Please enter your Mobile Number"),
  password: Yup.string().required("Please enter your Password"),
});

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="box-shadow justify-content-center"
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <Card.Title className="mt-3 mb-4 font-weight-semibold">
            <h4>Sign Up</h4>
          </Card.Title>

          <Form noValidate>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="font-weight-semibold">
                Username:
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="font-weight-semibold">Email:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your email address"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="font-weight-semibold">
                Mobile No.:
              </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter your Mobile No."
                maxLength={10}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="font-weight-semibold">
                Password:
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button
                className="btn btn-dark-cyan mb-3"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <p>
              Do you have an account{" "}
              <Link href={"/menswear/login"} className="text-decoration-none ">
                Login{" "}
              </Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
