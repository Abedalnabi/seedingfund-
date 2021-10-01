import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./signUp.css";
import { Form, Row, Col, Button } from "react-bootstrap";

const BeforeSignUp = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [role_id, setRole_id] = useState("Project Manger");
  const [message, setMessage] = useState("");

  async function addNewUser() {
    try {
      const newUser = {
        firstName,
        lastName,
        age,
        email,
        password,
        role_id,
      };
      //client validation
      if (!firstName || !lastName || !email || !password || !age) {
        setMessage("Please fill all the info");
      } else {
        await axios
          .post("http://localhost:5000/register", newUser)
          .then((response) => {
            console.log(response.data[0].active);
            if (response.data[0].active == 1) {
              console.log(response);
              setMessage("The user has been created successfully");
              setTimeout(function () {
                history.push("/login");
              }, 2000);
            } else {
              setMessage("you need to accept from admin");
            }
          });
      }
    } catch (error) {
      console.log("here");
      setMessage("Error 5000 happened while register, please try again");
      throw error;
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    addNewUser();
  }

  return (
    <div className="border">
      <div className="sig">
        <Form onSubmit={handelSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="First Name"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="Last Name"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email here"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password here"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>age</Form.Label>
              <Form.Control
                placeholder="age here"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState" onClick={(e) => {}}>
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue="Project Manger"
                onClick={(e) => {
                  setRole_id(e.target.value);
                }}
              >
                <option>Project Manger</option>
                <option>Admin</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit on">
            Sign Up
          </Button>
        </Form>
        {message}
      </div>
    </div>
  );
};

export default BeforeSignUp;
