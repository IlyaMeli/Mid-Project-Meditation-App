import React from "react";
import SignIn from "../component/SignIn/SignIn";

const SignInPage = (props) => {
  const { clientId } = props;
  return (
    <div className="home">
      <h2>Hello!</h2>
      <h3>To Free Your mind first Sign In</h3>
      <SignIn clientId={clientId} />;
    </div>
  );
};

export default SignInPage;
