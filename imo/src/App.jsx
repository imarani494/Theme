import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <nav style={{ padding: "10px", background: "#ddd" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
