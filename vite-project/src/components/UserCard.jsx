import React from "react";

const UserCard = ({ name, email, city }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
    </div>
  );
};

export default UserCard;
