import React, { useEffect, useContext } from "react";
import Countdown from "react-countdown";
import AppContext from "../../component/AppContext/AppContext";
import audio from "../../assets/audios/meditate.mp3";
import "./meditationtimer.css";

const MeditationTimer = () => {
  const appContext = useContext(AppContext);
  let meditateAudio = new Audio(audio);

  useEffect(() => {
    meditateAudio.play();

    return () => {
      meditateAudio.pause();
      appContext.setUser((prevState) => {
        return {
          ...prevState,
          medTotalTime: prevState.medTotalTime + appContext.timerValue,
          medLevel: appContext.level,
        };
      });
    };
  }, []);

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
        <span
          // onClick={() => {
          //   console.log(appContext.user.medTotalTime);
          //   appContext.setUser((prevState) => {
          //     return {
          //       ...prevState,
          //       medTotalTime: prevState.medTotalTime + appContext.timerValue,
          //       medLevel: appContext.level,
          //     };
          //   });
          //   console.log(appContext.user);
          // }}
          className="meditate-timer"
        >
          {minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </span>
      );
    }
  };

  return (
    <Countdown
      // date={Date.now() + timeValue}
      date={Date.now() + 3000}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
};

export default MeditationTimer;
