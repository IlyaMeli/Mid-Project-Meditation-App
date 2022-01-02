import React, { createContext, useEffect, useState } from "react";
import vid from "../src/assets/videos/sea.mp4";

import "./App.css";
import Router from "./component/Router/Router";
import AppContext from "./component/AppContext/AppContext";
function App() {
  const CLIENT_ID =
    "820851053767-ggjooaoqt3mebbj6e1qf21n9crrs5fvs.apps.googleusercontent.com";
  const routerProps = { CLIENT_ID };

  let [user, setUser] = useState(null);
  let [level, setLevel] = useState(null);
  let context = {
    user,
    setUser,
    level,
    setLevel,
  };

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
