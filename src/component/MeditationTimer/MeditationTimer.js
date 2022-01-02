import React, { useEffect, useContext, useState } from "react";
import Countdown from "react-countdown";
import AppContext from "../../component/AppContext/AppContext";
import audio from "../../assets/audios/meditate.mp3";
import "./meditationtimer.css";

const MeditationTimer = () => {
  const appContext = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);
  let meditateAudio = new Audio(audio);
  useEffect(() => {
    meditateAudio.play();

    return () => {
      meditateAudio.pause();
    };
  }, []);
  // const toggleAudio = () => {
  // isPlaying ? meditateAudio.pause() : meditateAudio.play();
  //   setIsPlaying((isPlaying) => !isPlaying);
  // };

  const onComplete = () => {
    meditateAudio.pause();
  };
  const timeValue = appContext.timerValue * 60 * 1000;
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div className="meditate-timer">Great Job</div>;
    } else {
      // Render a countdown
      return (
        <span className="meditate-timer">
          {minutes}:{seconds === 0 || seconds < 10 ? "0" + seconds : seconds}
        </span>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + timeValue}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
};

export default MeditationTimer;
