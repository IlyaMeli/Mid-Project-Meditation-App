import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import React from "./pages/Route";
import AppContext from "./component/AppContext"
function App() {
  return (
    <AppContext.Provider value={"check"}>
    <div className="App">
      <Route />
    </div>
    </AppContext.Provider>
  );
}

export default App;
