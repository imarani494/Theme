

import React, { useState } from "react";

const BottomMainRight = ({ name }) => {
  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px" }}>
      <h4>BottomMainRight Component</h4>
      <p>
        👋 Hello, <strong>{name || "Stranger"}</strong>!
      </p>
    </div>
  );
};

const BottomMain = ({ name }) => {
  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px" }}>
      <h3>BottomMain Component</h3>
      <BottomMainRight name={name} />
    </div>
  );
};

const Main = ({ name }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Main Component</h2>
      <BottomMain name={name} />
    </div>
  );
};

const Pro = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Props Drilling Example (Same Page)</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "20px",
          width: "250px",
        }}
      />

      <Main name={name} />
    </div>
  );
};

export default Pro;
