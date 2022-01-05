import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./home.css";

const Home = () => {
  const TEXTS = ["Free Your Mind", "Meditate Today", "Quiet the soul"];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="home-container">
        <h1>
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.slow}
            inline={false}
          />
        </h1>
      </div>
    </>
  );
};

export default Home;
