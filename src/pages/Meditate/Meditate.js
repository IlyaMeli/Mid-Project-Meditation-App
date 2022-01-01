import React, { useState } from "react";
import "./meditate.css";

const Meditate = () => {
  const [cardLevel, setLevelCard] = useState(false);
  const [typeName, setTypeName] = useState("");

  const handleFlip = (type) => {
    setLevelCard((cardLevel) => !cardLevel);

    setTypeName(type);
  };

  return (
    <>
      <div className="meditate-container">
        <h2 className="meditate-title">Start Your Journey.</h2>
        <div className="meditate-card">
          {cardLevel ? (
            <div>You choose {typeName} </div>
          ) : (
            <>
              <div>Choose Your Level</div>
              <div className="meditate-levels">
                <div
                  onClick={() => handleFlip("Beginner")}
                  className="level"
                  role="button"
                >
                  Beginner
                </div>
                <div
                  onClick={() => handleFlip("Intermediate")}
                  className="level"
                  role="button"
                >
                  Intermediate
                </div>
                <div
                  onClick={() => handleFlip("Expert")}
                  className="level"
                  role="button"
                >
                  Expert
                </div>
              </div>
            </>
          )}
          {/* <div onClick={handleFlip} className="level" role="button">
              Beginner
            </div>
            <div className="level">Intermediate</div>
            <div className="level">Expert</div> */}
        </div>
      </div>
    </>
  );
};

export default Meditate;
