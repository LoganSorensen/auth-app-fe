import React from "react";
import { Route, useHistory } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/devchallenges.svg";
import { ReactComponent as LogoLight } from "../assets/devchallenges-light.svg";
import UserInfo from "./userInfo";
import EditUserInfo from "./editUserInfo";

const ProfilePage = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;

  const history = useHistory();

  const displayAccountOptions = () => {
    const arrow = document.querySelector(".dropdown-arrow");
    const accountOptions = document.querySelector(".account-options");

    arrow.classList.toggle("rotate-arrow");
    accountOptions.style.display === "none"
      ? (accountOptions.style.display = "flex")
      : (accountOptions.style.display = "none");
  };

  const logout = () => {
    console.log("loggin out");
    localStorage.clear("token");
    history.push('/login')
  };

  return (
    <div className="profile-page">
      <header>
        {prefersDarkMode ? <LogoLight /> : <Logo />}
        <div className="account" onClick={displayAccountOptions}>
          <div className="image-wrapper"></div>
          <span className="user-name">Xanthe Neal</span>
          <span className="material-icons dropdown-arrow">arrow_drop_down</span>
          <div className="account-options" style={{ display: "none" }}>
            <button onClick={() => history.push('/profile')}>
              <span className="material-icons">account_circle</span>
              My Profile
            </button>
            <button>
              <span className="material-icons">people</span>
              Group Chat
            </button>
            <hr />
            <button className="logout-btn" onClick={logout}>
              <span className="material-icons">logout</span>
              Logout
            </button>
          </div>
        </div>
      </header>
      <Route exact path="/profile" component={UserInfo} />
      <Route path="/profile/edit" component={EditUserInfo} />
    </div>
  );
};

export default ProfilePage;
