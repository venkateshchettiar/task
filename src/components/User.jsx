import React from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
      >
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>
      <h1>Username: {props.location.state?.username}</h1>
      <h1>Name: {props.location.state?.name}</h1>
      <h1>Email: {props.location.state?.email}</h1>
      <h1>WebSite: {props.location.state?.website}</h1>
      <h1>Company: {props.location.state?.company?.name}</h1>
    </div>
  );
};

export default User;
