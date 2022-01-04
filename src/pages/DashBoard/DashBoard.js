import React, { useContext } from "react";
import AppContext from "../../component/AppContext/AppContext";
import { Line } from "rc-progress";
import "./dashboard.css";

const DashBoard = () => {
  const appContext = useContext(AppContext);

  const timeToProgress = () => {
    return (appContext.user.medTotalTime * 100) / 600;
  };

  const showMinutesOrHours = () => {
    if (appContext.user.medTotalTime > 60) {
      return `${Math.floor(appContext.user.medTotalTime / 60)} Hour`;
    }
    if (appContext.user.medTotalTime === 60) {
      return `${appContext.user.medTotalTime / 60} Hour`;
    }

    if (appContext.user.medTotalTime >= 120) {
      return `${Math.floor(appContext.user.medTotalTime / 60)} Hours`;
    } else {
      return `${appContext.user.medTotalTime} Minutes`;
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dash-title">My Journey</h2>
      <div className="dashboard-content">
        <div className="dashboard-user-info">
          <div className="dash-name">{appContext.user.name}</div>
          <div className="dash-email">Email: {appContext.user.email}</div>
        </div>

        <div className="dash-total-time">
          {/* You have meditated for {appContext.user.medTotalTime} minutes total */}
          You have meditated for {showMinutesOrHours()} total
        </div>
        <div className="dash-med-lvl">
          {/* Your Meditation Rank is: {appContext.user.medLevel} */}
          <Line
            percent={timeToProgress()}
            strokeWidth="1"
            strokeColor="rgb(175, 203, 255)"
            trailColor="rgba(255, 255, 255,0.3)"
          />
          <div className="dash-progress-words">
            <div>Rookie</div>
            <div>Pro</div>
            <div>Elite</div>
            <div>Master</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
