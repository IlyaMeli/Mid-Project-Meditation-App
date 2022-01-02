import React, { useEffect, useContext } from "react";
import Countdown from "react-countdown";
import AppContext from "../../component/AppContext/AppContext";
import "./meditationtimer.css";

const MeditationTimer = () => {
  const appContext = useContext(AppContext);

  const timeValue = appContext.timerValue * 60 * 1000;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div className="meditate-timer">finished</div>;
    } else {
      // Render a countdown
      return (
        <span className="meditate-timer">
          {minutes}:{seconds === 0 || seconds < 10 ? "0" + seconds : seconds}
        </span>
      );
    }
  };

  useEffect(() => {}, []);

  return <Countdown date={Date.now() + timeValue} renderer={renderer} />;
};

export default MeditationTimer;
