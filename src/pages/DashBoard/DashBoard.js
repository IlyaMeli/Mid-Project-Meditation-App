import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../component/AppContext/AppContext";
import { Line } from "rc-progress";
import api from "../../api";
import "./dashboard.css";

const DashBoard = () => {
  const appContext = useContext(AppContext);
  const user = appContext.userForPut;

  const timeToProgress = () => {
    return (user.medTotalTime * 100) / 600;
  };

  const showMinutesOrHours = () => {
    if (user) {
      if (user.medTotalTime > 60) {
        return `${Math.floor(appContext.userForPut.medTotalTime / 60)} Hour`;
      }
      if (user.medTotalTime === 60) {
        return `${user.medTotalTime / 60} Hour`;
      }

      if (user.medTotalTime >= 120) {
        return `${Math.floor(user.medTotalTime / 60)} Hours`;
      } else {
        return `${user.medTotalTime} Minutes`;
      }
    }
  };

  return (
    <>
      {user && (
        <div className="dashboard-container">
          <h2 className="dash-title">My Journey</h2>
          <div className="dashboard-content">
            <div className="dashboard-user-info">
              <div className="dash-name">{user.name}</div>
              <div className="dash-email">Email: {user.email}</div>
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
      )}
    </>
  );
};

export default DashBoard;
// import React, { useContext, useEffect } from "react";
// import AppContext from "../../component/AppContext/AppContext";
// import { Line } from "rc-progress";
// import api from "../../api";
// import "./dashboard.css";

// const DashBoard = () => {
//   const appContext = useContext(AppContext);

//   useEffect(() => {
//     const getDashData = async () => {
//  user = await api.getItems();
//       cuser);
//     };
//     getDashData();
//   }, []);

//   const timeToProgress = () => {
//     return (appContext.user.medTotalTime * 100) / 600;
//   };

//   const showMinutesOrHours = () => {
//     if (appContext.user.medTotalTime > 60) {
//       return `${Math.floor(appContext.user.medTotalTime / 60)} Hour`;
//     }
//     if (appContext.user.medTotalTime === 60) {
//       return `${appContext.user.medTotalTime / 60} Hour`;
//     }

//     if (appContext.user.medTotalTime >= 120) {
//       return `${Math.floor(appContext.user.medTotalTime / 60)} Hours`;
//     } else {
//       return `${appContext.user.medTotalTime} Minutes`;
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <h2 className="dash-title">My Journey</h2>
//       <div className="dashboard-content">
//         <div className="dashboard-user-info">
//           <div className="dash-name">{appContext.user.name}</div>
//           <div className="dash-email">Email: {appContext.user.email}</div>
//         </div>

//         <div className="dash-total-time">
//           {/* You have meditated for {appContext.user.medTotalTime} minutes total */}
//           You have meditated for {showMinutesOrHours()} total
//         </div>
//         <div className="dash-med-lvl">
//           {/* Your Meditation Rank is: {appContext.user.medLevel} */}
//           <Line
//             percent={timeToProgress()}
//             strokeWidth="1"
//             strokeColor="rgb(175, 203, 255)"
//             trailColor="rgba(255, 255, 255,0.3)"
//           />
//           <div className="dash-progress-words">
//             <div>Rookie</div>
//             <div>Pro</div>
//             <div>Elite</div>
//             <div>Master</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;
