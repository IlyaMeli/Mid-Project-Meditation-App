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
  const [userForPut, setUserForPut] = useState(null);
  const [timerValue, setTimerValue] = useState(0);
  const [levelTimes, setLevelTimes] = useState({
    Beginner: 5,
    Intermediate: 10,
    Expert: 25,
  });
  const [dashData, setDashData] = useState(null);

  // const f = async () =>{
  //   console.log("REUT!!!",userData)
  //   await api.putItem(userData);
  // }

  const context = {
    dashData,
    setDashData,
    userForPut,
    setUserForPut,
    user,
    setUser,
    level,
    setLevel,
    setTimerValue,
    timerValue,
    setLevelTimes,
    levelTimes,
    // f,
  };

  useEffect(() => {
    const handlePost = async () => {
      if (user) {
        const data = await api.getItems();
        const userData = data.find((apiUser) => apiUser.gid === user.gid);
        setUserForPut(userData);
        if (!userData) {
          await api.postItem(user);
        }
      }
      console.log("Ilya:", user);
    };
    user && handlePost();
  }, [user]);

  useEffect(() => {
    const handlePut = async () => {
      if (userForPut) {
        await api.putItem(userForPut);
      }
    };
    console.log("Ilya from PUT func:", userForPut);
    handlePut();
  }, [userForPut]);

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
