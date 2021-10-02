import axios from "axios";
import React, { useEffect, useState } from "react";
import { Stack, Button, Form, Card } from "react-bootstrap";
import "./styel1.css";
import jwt from "jsonwebtoken";

const GetAllRequisites = () => {
  let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  let user;
  if (token) {
    user = jwt.decode(token);
    console.log(user);
    console.log(user.roleId);
  }
  console.log(user.roleId);

  const [allReq, setAllReq] = useState([]);
  useEffect(async () => {
    const allReq = await axios.get(`http://localhost:5000/allRequest/1`);
    console.log(allReq.data);
    setAllReq(allReq.data);
  }, []);

  function approve(funding_id) {
    console.log("aaaaaaaa");
    axios.post("http://localhost:5000/updateApproved", {
      funding_id,
    });
    window.location.reload();
  }

  function disApprove(funding_id) {
    axios.post("http://localhost:5000/updateDisApproved", {
      funding_id,
    });
    window.location.reload();
  }
  return (
    <div className="border">
      {user.roleId == 1 ? (
        <div className="sigg">
          {allReq &&
            allReq.map((ele) => {
              return (
                <div className>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{ele.project_name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {ele.firstName}
                      </Card.Subtitle>
                      <Card.Text>{ele.project_description}</Card.Text>
                      <Button
                        onClick={() => {
                          approve(ele.funding_id);
                        }}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          disApprove(ele.funding_id);
                        }}
                      >
                        Dis Approve
                      </Button>{" "}
                      {ele.porject_state == 0 ? (
                        <p>Not Approved</p>
                      ) : ele.porject_state == 1 ? (
                        <p>APPROVED</p>
                      ) : (
                        <p>Need to Approved</p>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      ) : (
        <p>you are not an Admin you cant see anything</p>
      )}
    </div>
  );
};

export default GetAllRequisites;
