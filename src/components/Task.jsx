import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../App.css";

const Task = () => {
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const funct = async () => {
      const posts = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );

      const users = await Axios.get(
        `https://jsonplaceholder.typicode.com/users/`
      );

      // setList(users.data.map((m) => m.username));

      const mergeById = (users, posts) =>
        posts.map((itm) => ({
          ...users.find((item) => item.id === itm.userId && item),
          ...itm,
        }));
      setValues(mergeById(users.data, posts.data));
    };
    funct();
  }, []);

  const handleCard = (post) => {
    const id = post.id;
    Axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    ).then((res) => {
      history.push({
        pathname: "/comment",
        state: { post: post.id, comment: res.data, user: post.username },
      });
    });
  };

  const handleClick = (post) => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(
      (res) => {
        history.push({ pathname: "/user", state: res.data });
      }
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          id="myInput"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for names.."
        />
      </div>
      <div className="row" style={{ marginLeft: "30px" }}>
        {values
          // .filter((fil) => {
          //   if (!trig) {
          //     return [];
          //   } else if (
          //     fil.username.toLowerCase().includes(trig.toLowerCase())
          //   ) {
          //     return fil;
          //   }
          // })
          .filter((fil) => {
            if (search === "") {
              return fil;
            } else if (
              fil.username.toLowerCase().includes(search.toLowerCase())
            ) {
              return fil;
            }
          })
          .map((post, i) => (
            <div key={i}>
              <Card
                style={{
                  border: "5px solid #33C4FF",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "30px",
                  marginRight: "150px",
                  marginLeft: "100px",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        zIndex: 0,
                      }}
                      onClick={() => handleCard(post)}
                    ></div>
                    <button
                      style={{ zIndex: 2, position: "relative" }}
                      id="btn"
                      onClick={() => handleClick(post)}
                    >
                      {post.username}
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default Task;
