import React, { useState, createContext, useContext } from "react";


const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: "30px",
    margin: "20px auto",
    textAlign: "center",
    width: "300px",
    borderRadius: "10px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow:
      theme === "light"
        ? "0 0 10px rgba(0,0,0,0.1)"
        : "0 0 10px rgba(255,255,255,0.2)",
  };

  return <div style={styles}>This box is in {theme} mode!</div>;
};


const App = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>React Context API Theme Toggle</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
        }}
      >
        Toggle Theme
      </button>
      <ThemedBox />
      <ThemedBox />
    </div>
  );
};


const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
