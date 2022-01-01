import React, { useContext, useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import AppContext from "../AppContext/AppContext";

const SignIn = (props) => {
  const { clientId } = props;
  const appContext = useContext(AppContext);

  const onSuccess = (user) => {
    console.log("Signed in as " + user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getId());
    const basicProfile = user.getBasicProfile();
    appContext.setUser({
      gid: basicProfile.getId(),
      name: basicProfile.getName(),
      email: basicProfile.getEmail(),
    });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default SignIn;
