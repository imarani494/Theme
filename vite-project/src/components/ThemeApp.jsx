
import React, { useState } from "react";

const ThemedBox = ({ theme, children }) => {
  const isDark = theme === "dark";

  const boxStyle = {
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    backgroundColor: isDark ? "#333" : "#f0f0f0",
    color: isDark ? "#f9f9f9" : "#1a1a1a",
    textAlign: "center",
    boxShadow: isDark
      ? "0 0 10px rgba(255, 255, 255, 0.2)"
      : "0 0 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return <div style={boxStyle}>{children}</div>;
};


const ThemeApp = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const appStyle = {
    backgroundColor: theme === "dark" ? "#111" : "#fff",
    color: theme === "dark" ? "#eee" : "#111",
    minHeight: "100vh",
    padding: "40px",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "10px 20px",
    marginBottom: "20px",
    cursor: "pointer",
    backgroundColor: theme === "dark" ? "#444" : "#ddd",
    color: theme === "dark" ? "#fff" : "#000",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <div style={appStyle}>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <ThemedBox theme={theme}>This is Box 1</ThemedBox>
      <ThemedBox theme={theme}>This is Box 2</ThemedBox>
      <ThemedBox theme={theme}>This is Box 3</ThemedBox>
    </div>
  );
};

export default ThemeApp;
