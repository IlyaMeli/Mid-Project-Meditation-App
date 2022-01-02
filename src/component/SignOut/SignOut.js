import React, { useContext, useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";

import AppContext from "../AppContext/AppContext";

import "./signOut.css";

const SignOut = (props) => {
  const { clientId } = props;
  const appContext = useContext(AppContext);
  //   const history = useHistory();

  const onSuccess = function () {
    console.log("Signed out successfully");
    console.log(appContext);
    appContext.setUser(null);
  };

  const onFailure = function (error) {
    console.log(error);
  };

  return (
    <>
      <GoogleLogout
        render={(renderProps) => (
          <div
            className="nav-signout"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign Out
          </div>
        )}
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
      />
    </>
  );
};

export default SignOut;
