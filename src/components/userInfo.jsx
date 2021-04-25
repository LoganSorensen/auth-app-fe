import React from "react";

const UserInfo = () => {
  const editInfo = () => {};

  return (
    <div className="user-info">
      <div className="user-info-header">
        <div>
          <h3>Profile</h3>
          <span>Some info may be visible to other people</span>
        </div>
        <button onClick={editInfo}>Edit</button>
      </div>
      <div className="user-info-row photo-row">
        <span className="row-name">Photo</span>
        <div className="image-wrapper"></div>
      </div>
      <div className="user-info-row">
        <span className="row-name">Name</span>
        <span className="row-data">Xanthe Neal</span>
      </div>
      <div className="user-info-row">
        <span className="row-name">Bio</span>
        <span className="row-data">
          I am a software developer and a big fan of devchallenges...
        </span>
      </div>
      <div className="user-info-row">
        <span className="row-name">Phone</span>
        <span className="row-data">908249274292</span>
      </div>
      <div className="user-info-row">
        <span className="row-name">Email</span>
        <span className="row-data">xanthe.neal@gmail.com</span>
      </div>
      <div className="user-info-row" id="password-row">
        <span className="row-name">Password</span>
        <span className="row-data">************</span>
      </div>
    </div>
  );
};

export default UserInfo;
