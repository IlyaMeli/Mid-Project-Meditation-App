import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Router from "./component/Router/Router";
import AppContext from "./component/AppContext/AppContext";
function App() {
  const CLIENT_ID =
    "820851053767-ggjooaoqt3mebbj6e1qf21n9crrs5fvs.apps.googleusercontent.com";
  const routerProps = { CLIENT_ID };

  let [user, setUser] = useState(null);
  let context = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <Router routerProps={routerProps} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
