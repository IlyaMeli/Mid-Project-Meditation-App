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
  };

  useEffect(() => {
    const handlePost = async () => {
      if (user) {
        const data = await api.getItems();
        console.log("check for Shmuel", data);
        const userData = data.find((apiUser) => apiUser.gid === user.gid);
        console.log("check for Shmuel2", userData);
        setUserForPut(userData);
        if (!userData) {
          const { data } = await api.postItem(user);
          console.log("its shmuel agian:", data);
          setUserForPut(data);
        }
      }
      console.log("Ilya 123456:", user);
    };
    user && handlePost();
  }, [user]);

  useEffect(() => {
    const handlePut = async () => {
      if (userForPut) {
        await api.putItem(userForPut);
        // const itemData = await api.getItem(user.id);
        // setUser(itemData);
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
