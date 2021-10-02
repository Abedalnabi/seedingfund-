import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { Card, Button } from "react-bootstrap";

const GetMyFunding = () => {
  const [myFund, setMyFund] = useState([]);
  const [user_id, setUser_id] = useState("");

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
    };
  });

  useEffect(async () => {
    const user = await jwt.decode(state.token);
    const fund = await axios.get(
      `http://localhost:5000/myFunding/${user.userId}`
    );
    setMyFund(fund.data);
  }, []);
  return (
    <div className="border">
      <div className="sigg">
        {myFund &&
          myFund.map((ele, i) => {
            return (
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{ele.project_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {ele.budget}
                    </Card.Subtitle>
                    <Card.Text>{ele.project_description}</Card.Text>
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
    </div>
  );
};

export default GetMyFunding;
