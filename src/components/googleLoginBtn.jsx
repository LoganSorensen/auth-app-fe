import React from "react";
import { GoogleLogin } from "react-google-login";

import { ReactComponent as GoogleLogo } from "../assets/Google.svg";

const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleLoginBtn = () => {
  const loginSuccess = (res) => {
    console.log(`[Login Success] currentUser:`, res.profileObj);
  };

  const loginFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };
  
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <GoogleLogo className="logo-btn" onClick={renderProps.onClick} />
        )}
        onSuccess={loginSuccess}
        onFailure={loginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginBtn;
