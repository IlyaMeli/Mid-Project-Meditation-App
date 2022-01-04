import React, { useState, useEffect } from "react";
import vid from "../src/assets/videos/sea.mp4";
import "./App.css";
import Router from "./component/Router/Router";
import AppContext from "./component/AppContext/AppContext";
import api from "./api";
function App() {
  const CLIENT_ID =
    "820851053767-ggjooaoqt3mebbj6e1qf21n9crrs5fvs.apps.googleusercontent.com";

  const routerProps = { CLIENT_ID };
  let [user, setUser] = useState(null);
  let [level, setLevel] = useState(null);
  const [userData, setUserData] = useState(null);
  const [wasChanged, setWasChanged] = useState(false);
  const [timerValue, setTimerValue] = useState(0);
  const [levelTimes, setLevelTimes] = useState({
    Beginner: 5,
    Intermediate: 10,
    Expert: 25,
  });

  // const f = async () =>{
  //   console.log("REUT!!!",userData)
  //   await api.putItem(userData);
  // }

  const context = {
    user,
    setUser,
    level,
    setLevel,
    setTimerValue,
    timerValue,
    setLevelTimes,
    levelTimes,
    wasChanged,
    setWasChanged,
    setUserData,
    // f,
  };

  useEffect(() => {
    const handlePost = async () => {
      if (user) {
        const data = await api.getItems();
        const userData = data.find((apiUser) => apiUser.gid === user.gid);
        setUserData(userData);
        if (!userData) {
          await api.postItem(user);
        }
      }
      console.log("Ilya:", user);
    };
    user && handlePost();
  }, [user]);

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <video muted loop autoPlay="autoplay">
          <source src={vid} type="video/mp4" />
        </video>
        <Router routerProps={routerProps} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
