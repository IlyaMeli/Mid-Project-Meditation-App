import React, { useContext } from "react";
import AppContext from "../../component/AppContext/AppContext";
import { Line } from "rc-progress";
import "./dashboard.css";

const DashBoard = () => {
  const appContext = useContext(AppContext);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-user-info">
          <div className="dash-name">{appContext.user.name}</div>
          <div className="dash-email">Email: {appContext.user.email}</div>
        </div>

        <div className="dash-total-time">
          You have meditated for {appContext.user.medTotalTime} minutes total,
          Great Job.
        </div>
        <div className="dash-med-lvl">
          {/* Your Meditation Rank is: {appContext.user.medLevel} */}
          <Line
            percent="95"
            strokeWidth="3"
            strokeColor="rgba(49, 144, 251, 0.8)"
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
