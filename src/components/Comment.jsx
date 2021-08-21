import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Comment = (props) => {
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
      <h1>{props.location.state.post?.title}</h1>
      <h1>{props.location.state.user}</h1>
      <h1>Comments:</h1>
      {props.location.state.comment?.map((m, i) => (
        <Card
          key={i}
          style={{
            border: "5px solid #6becee",
            margin: "10px",
            backgroundColor: "orange",
          }}
        >
          <h3>{m.name}</h3>
          <h3>{m.body}</h3>
          <h3>{m.email}</h3>
        </Card>
      ))}
    </div>
  );
};

export default Comment;
