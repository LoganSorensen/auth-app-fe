import React from "react";
import { Route } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/devchallenges.svg";
import UserInfo from "./userInfo";
import EditUserInfo from './editUserInfo'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header>
        <Logo />
        <div>
          <div className="image-wrapper"></div>
          <span className="user-name">Xanthe Neal</span>
          <span className="material-icons">arrow_drop_down</span>
          
        </div>
      </header>
      <Route exact path='/profile' component={UserInfo} />
      <Route path='/profile/edit' component={EditUserInfo} />
    </div>
  );
};

export default ProfilePage;
