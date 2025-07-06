import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "#282c34",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white" }}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
