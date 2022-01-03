import React, { useContext } from "react";
import AppContext from "../../component/AppContext/AppContext";
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
          Your Meditation Rank is: {appContext.user.medLevel}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
