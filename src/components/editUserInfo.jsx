import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className="edit-user-info">
      <Link to="/profile">
        <span className="material-icons">chevron_left</span>Back
      </Link>
      <form onSubmit={handleSubmit}>
        <h3>Change Info</h3>
        <span>Changes will be reflected on every service</span>
        <div className="edit-image">
          <div className="image-cont">
            <span className="material-icons">photo_camera</span>
          </div>
          <button type="button">Change Photo</button>
        </div>

        <label htmlFor="edit-name-field">Name</label>
        <input
          type="text"
          id="edit-name-field"
          placeholder="Enter your name..."
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="edit-bio-field">Bio</label>
        <input
          type="text"
          id="edit-bio-field"
          placeholder="Enter your bio..."
          name="bio"
          value={userInfo.bio}
          onChange={handleChange}
        />
        <label htmlFor="edit-phone-field">Phone</label>
        <input
          type="text"
          id="edit-phone-field"
          placeholder="Enter your phone..."
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
        />
        <label htmlFor="edit-email-field">Email</label>
        <input
          type="email"
          id="edit-email-field"
          placeholder="Enter your email..."
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="edit-password-field">Password</label>
        <input
          type="password"
          id="edit-password-field"
          placeholder="Enter your password..."
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUserInfo;
