import React, { useEffect, useState, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);


  const playSound = () => {
    const audio = new Audio("https://www.soundjay.com/button/sounds/beep-07.mp3");
    audio.play().catch(() => console.log("Sound playback skipped or failed."));
  };

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev + 1 === 10) {
            playSound();
          }
          return prev + 1;
        });
      }, 1000);
    }

   
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleStart = () => {
    if (!running) {
      setRunning(true);
    }
  };

  const handleStop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h2>Stopwatch</h2>
      <h1>{seconds} sec</h1>

      <button
        onClick={handleStart}
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Start
      </button>

      <button
        onClick={handleStop}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Stopwatch;
