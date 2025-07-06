import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  if (!post) return <p style={{ padding: "20px" }}>Loading post...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div style={{ marginTop: "20px" }}>
        <strong>Tags:</strong>{" "}
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              marginRight: "10px",
              background: "#eee",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
