import React from "react";

import { ReactComponent as Logo } from "../assets/devchallenges.svg";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header>
        <Logo />
        <div>
          <div className="image-wrapper"></div>
          <span className="user-name">Xanthe Neal</span>
          <span class="material-icons">arrow_drop_down</span>
        </div>
      </header>
      <h2>Personal info</h2>
      <p>Basic info, like your name and photo</p>

    </div>
  );
};

export default ProfilePage;
