import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import img from '../../public/supermaket.png'
import './auth.css'

export const SignUp = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate("/login");
  };

  const onClickHandler = () => {
    console.log(user);
  };

  return (
    <div
      className="container-fluid"
      style={{
        background:
        "linear-gradient(93deg, rgba(58,162,180,0.6797312675070029) 0%, rgba(253,29,227,0.38001137955182074) 48%, rgba(252,176,69,0.2399553571428571) 100%)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          backgroundColor: "white",
          width: "400px",
          height: "400px",
          borderRadius:"5%"
        }}
      >
        <h2 style={{textAlign:"center", marginTop:"5%"}}>Sign Up</h2>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalEmail"
        >
          <Col sm={10}>
            <Form.Control
              type="user"
              placeholder="User Id"
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              style={{ marginLeft:"10%" , marginTop:"8%", textAlign:"center", opacity:"80%" }}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalEmail"
        >
          <Col sm={10}>
            <Form.Control
              type="user"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={{ marginLeft:"10%" ,  textAlign:"center", opacity:"80%" }}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={{ marginLeft:"10%" , textAlign:"center", opacity:"80%" }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck" >
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type="submit"
              style={{ marginRight: "30%", marginTop: "14%", width:"90px", height:"40px" }}
              onClick={onClickHandler}
            >
              Sign Up
            </Button>
            <Button
              type="button"
              style={{ marginTop: "14%", width:"90px", height:"40px" }}
              onClick={onClickNavigate}
            >
              Login
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
