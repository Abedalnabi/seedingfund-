import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import jwt from "jsonwebtoken";
import axios from "axios";

import { Col, Form, Button, Row, FloatingLabel } from "react-bootstrap";
const AddFunding = () => {
  const history = useHistory();
  const [project_name, setProjectName] = useState("");
  const [project_description, setProject_description] = useState("");
  const [project_sector, setProjectSector] = useState("");
  const [budget, setBudget] = useState("");
  const [user_id, setUser_id] = useState("");
  const [message, setMessage] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
    };
  });

  useEffect(async () => {
    const user = await jwt.decode(state.token);
    setUser_id(user.userId);
  }, []);

  async function addFund(e) {
    e.preventDefault();
    if (!project_name && !project_description && !project_sector && !budget) {
      setMessage("please fill all information");
      return;
    }
    const newFund = {
      project_name,
      project_description,
      project_sector,
      budget,
      user_id,
    };
    axios.post("http://localhost:5000/addFunding", newFund).then(() => {
      setMessage("Project added successfully");
    });

    setTimeout(function () {
      history.push("/myFunding");
    }, 1000);
  }

  return (
    <div className="border">
      <div className="sig">
        <Form onSubmit={addFund}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>project name</Form.Label>
              <Form.Control
                type="text"
                placeholder="project name"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Budget</Form.Label>
              <Form.Control
                type="text"
                placeholder="Budget"
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>project sector</Form.Label>
            <Form.Control
              placeholder="project sector"
              onChange={(e) => {
                setProjectSector(e.target.value);
              }}
            />
          </Form.Group>
          <>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="project description"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={(e) => {
                  setProject_description(e.target.value);
                }}
              />
            </FloatingLabel>
          </>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {message}
      </div>
    </div>
  );
};

export default AddFunding;
