import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import api from "../../api";
import AppContext from "../AppContext/AppContext";

const SignIn = (props) => {
  const { clientId } = props;
  const appContext = useContext(AppContext);

  const onSuccess = async (user) => {
    console.log("Signed in as " + user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getId());
    const basicProfile = user.getBasicProfile();
    //check in DB if user exists --->
    // get userData from DB (MOCKAPI);
    appContext.setUser({
      gid: basicProfile.getId(),
      name: basicProfile.getName(),
      email: basicProfile.getEmail(),
      medTotalTime: 0,
      medLevel: "",
      // id: 1,
    });
    console.log("check reut:", appContext.user);
    await api.postItem(appContext.user);
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
