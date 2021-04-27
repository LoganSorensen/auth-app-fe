import React from "react";
import { Route } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/devchallenges.svg";
import { ReactComponent as LogoLight } from "../assets/devchallenges-light.svg";
import UserInfo from "./userInfo";
import EditUserInfo from "./editUserInfo";

const ProfilePage = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;

  return (
    <div className="profile-page">
      <header>
        {prefersDarkMode ? <LogoLight /> : <Logo />}
        <div>
          <div className="image-wrapper"></div>
          <span className="user-name">Xanthe Neal</span>
          <span className="material-icons">arrow_drop_down</span>
        </div>
      </header>
      <Route exact path="/profile" component={UserInfo} />
      <Route path="/profile/edit" component={EditUserInfo} />
    </div>
  );
};

export default ProfilePage;
