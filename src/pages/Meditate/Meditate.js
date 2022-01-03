import React, { useState, useContext } from "react";
import "./meditate.css";
import AppContext from "../../component/AppContext/AppContext";
import CountDownThree from "../../component/CountDownThree/CountDownThre";
// import audio from "../../assets/audios/meditate.mp3";

const Meditate = () => {
  const appContext = useContext(AppContext);
  const [cardLevel, setLevelCard] = useState(false);
  const [typeName, setTypeName] = useState("");
  const [meditationState, setMedStatement] = useState(true);

  const handleFlip = (type) => {
    setLevelCard((cardLevel) => !cardLevel);
    console.log("from meditate:", appContext);
    setTypeName(type);
    appContext.setLevel(type);
    // console.log(appContext);
  };

  const createMeditation = () => {
    return <CountDownThree />;
  };
  const handleMeditate = () => {
    setMedStatement((meditationState) => !meditationState);
    appContext.setTimerValue(appContext.levelTimes[typeName]);
  };

  return (
    <>
      <div className="meditate-container">
        {meditationState ? (
          <>
            <h2 className="meditate-title">Start Your Journey.</h2>
            <div className="meditate-card">
              {cardLevel ? (
                <>
                  <div>You chose {typeName} </div>
                  <div className="meditate-btn" onClick={handleMeditate}>
                    Meditate Now
                  </div>
                </>
              ) : (
                <>
                  <div>Choose Your Level</div>
                  <div className="meditate-levels">
                    <div
                      onClick={() => handleFlip("Beginner")}
                      className="level"
                      role="button"
                    >
                      Beginner 5 minutes
                    </div>
                    <div
                      onClick={() => handleFlip("Intermediate")}
                      className="level"
                      role="button"
                    >
                      Intermediate 10 minutes
                    </div>
                    <div
                      onClick={() => handleFlip("Expert")}
                      className="level"
                      role="button"
                    >
                      Expert 25 minutes
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          createMeditation()
        )}
      </div>
    </>
  );
};

export default Meditate;
