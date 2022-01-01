import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./home.css";
import vid from "../assets/videos/sea.mp4";

const Home = () => {
  const TEXTS = ["Free Your Mind", "Meditate Today", "Mordi"];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="home-container">
        <video muted loop autoplay="autoplay">
          <source src={vid} type="video/mp4" />
        </video>
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
