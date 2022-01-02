import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SpecialRoute from "../SpecialRoute/SpecialRoute";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import Meditate from "../../pages/Meditate/Meditate";
import AppContext from "../AppContext/AppContext";

const Router = ({ routerProps }) => {
  const { CLIENT_ID } = routerProps;
  const appContext = useContext(AppContext);

  return (
    <BrowserRouter>
      <Navbar clientId={CLIENT_ID} />
      <Switch>
        <Route exact path="/signin">
          <SpecialRoute condition={appContext.user}>
            <Redirect to="/" />
            <SignInPage clientId={CLIENT_ID} />
          </SpecialRoute>
        </Route>
        <Route exact path="/">
          <SpecialRoute condition={appContext.user}>
            <Home />
            <Redirect to="/signin" />
          </SpecialRoute>
        </Route>
        <Route exact path="/meditate">
          <SpecialRoute condition={appContext.user}>
            <Meditate />
            <Redirect to="/signin" />
          </SpecialRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
