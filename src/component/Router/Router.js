import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignInPage from "../../pages/SignInPage";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Meditate from "../../pages/Meditate/Meditate";

const Router = ({ routerProps }) => {
  const { CLIENT_ID } = routerProps;

  return (
    <BrowserRouter>
      <Navbar clientId={CLIENT_ID} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/meditate">
          <Meditate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
