import React from "react";
import SignIn from "../../component/SignIn/SignIn";
import "./signinpage.css";

const SignInPage = (props) => {
  const { clientId } = props;
  return (
    <div className="sign-container">
      <h3>To free your mind first Sign In.</h3>
      <SignIn clientId={clientId} />
    </div>
  );
};

export default SignInPage;
