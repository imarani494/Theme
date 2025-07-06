import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

const Settings = () => {
  const { user, updateUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    setForm({ name: user.name, email: user.email });
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
    alert("User info updated!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label><br />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>Update</button>
      </form>
    </div>
  );
};

export default Settings;
