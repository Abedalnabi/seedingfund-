import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import axios from "axios";
import { setToken } from "../../../reducers/login";
import { Form, Button, Image } from "react-bootstrap";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      user: state.loginReducer.user,
    };
  });

  //this function to handle the submitted form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then(async (result) => {
        if (result) {
          const user = await jwt.decode(result.data);
          if (user.active === 0) {
            setMessage("your account not active");
            return;
          }
          dispatch(setToken({ token: result.data, user }));
          localStorage.setItem("token", result.data);
          setMessage("The user has been loggedIn successfully ");
          setTimeout(function () {
            if (user.roleId == 1) {
              history.push("/allRequest");
            } else {
              history.push("/myFunding");
            }
          }, 1000);
        } else {
          setMessage("Error happened while login, please try again");
        }
      })
      .catch((err) => {
        setMessage("Password or Email is incorrect");
      });
  };

  return (
    <>
      <div className="border">
        <div className="sig">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
          {message}
        </div>
      </div>
    </>
  );
};

export default Login;
