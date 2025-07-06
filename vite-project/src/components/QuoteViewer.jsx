import React, { useEffect, useState } from "react";

const QuoteViewer = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);

 
  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setQuote({ content: "Failed to fetch quote. Try again.", author: "" });
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchQuote(); 

    const interval = setInterval(fetchQuote, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Daily Quote</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p style={{ fontSize: "1.5em", fontStyle: "italic" }}>
            “{quote.content}”
          </p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
            — {quote.author}
          </p>
        </>
      )}

      <button
        onClick={fetchQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1em",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get New Quote
      </button>
    </div>
  );
};

export default QuoteViewer;
