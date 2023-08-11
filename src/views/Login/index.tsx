"use client";
import Link from "next/link";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/services/authServices";
import "./login.scss";

type LoginData = {
  username: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your Username"),
  password: Yup.string().required("Please enter your Password"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginHandler: SubmitHandler<LoginData> = async (data) => {
    console.log("data", data);
    try {
      const response = await login(data.username, data.password);
      console.log("response", response);
    } catch (error) {}
  };

  return (
    <div className="login d-flex justify-content-center align-items-center">
      <Card
        className="box-shadow justify-content-center"
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <Card.Title className="mt-3 mb-4 font-weight-semibold">
            <h4>Sign In</h4>
          </Card.Title>

          <Form noValidate onSubmit={handleSubmit(loginHandler)}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="font-weight-semibold">
                Username:
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="font-weight-semibold">
                Password:
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
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
              <Link href="/menswear/forgot-password">Forgot Password?</Link>
            </div>
            <p>
              Don't have an account{" "}
              <Link href={"/menswear/signup"} className="text-decoration-none ">
                Sign Up{" "}
              </Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
