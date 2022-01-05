import React, { useEffect, useContext, useState } from "react";
import Countdown from "react-countdown";
import AppContext from "../../component/AppContext/AppContext";
import audio from "../../assets/audios/meditate.mp3";
import "./meditationtimer.css";
// import api from "../../api";

const MeditationTimer = () => {
  const appContext = useContext(AppContext);
  let meditateAudio = new Audio(audio);
  const [myCompleted, setMyCompleted] = useState(false);

  useEffect(() => {
    meditateAudio.play();

    return () => {
      meditateAudio.pause();
      // appContext.setUserForPut((prevState) => {
      //   return {
      //     ...prevState,
      //     medTotalTime: prevState.medTotalTime + appContext.timerValue,
      //     medLevel: appContext.level,
      //   };
      // });
    };
  }, []);

  const onComplete = () => {
    meditateAudio.pause();
    appContext.setUserForPut((prevState) => {
      return {
        ...prevState,
        medTotalTime: prevState.medTotalTime + appContext.timerValue,
        medLevel: appContext.level,
      };
    });
    setMyCompleted(true);
  };
  // const onComplete = () => {
  //   meditateAudio.pause();
  //   appContext.setUserForPut((prevState) => {
  //     return {
  //       ...prevState,
  //       medTotalTime: prevState.medTotalTime + appContext.timerValue,
  //       medLevel: appContext.level,
  //     };
  //   });
  // };
  const timeValue = appContext.timerValue * 60 * 1000;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div className="meditate-timer">Great Job</div>;
    } else {
      // Render a countdown
      return (
        <span className="meditate-timer">
          {minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </span>
      );
    }
  };

  return (
    <>
      {myCompleted ? (
        <div>Great Job Sir</div>
      ) : (
        <Countdown
          // date={Date.now() + timeValue }
          date={Date.now() + 3000}
          renderer={renderer}
          onComplete={onComplete}
        />
      )}
    </>
  );
};

export default MeditationTimer;
