import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);

  return (
    <nav
      style={{
        backgroundColor: "#282c34",
        padding: "10px 20px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>My App</h3>
      <button
        onClick={toggleAuth}
        style={{
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#61dafb",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};


const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h2>
        {isLoggedIn
          ? "You are successfully logged in!"
          : "Please log in to continue."}
      </h2>
    </main>
  );
};


const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      {isLoggedIn ? "Welcome, User!" : "Please log in."}
    </footer>
  );
};


const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};


const Auth = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default Auth;
