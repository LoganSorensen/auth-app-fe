import React from "react";
import { Link } from "react-router-dom";

const EditUserInfo = () => {
  return (
    <div className="edit-user-info">
      <Link to="/test">
        <span className="material-icons">chevron_left</span>Back
      </Link>
      <form>
        <h3>Change Info</h3>
        <span>Changes will be reflected on every service</span>
        <div className="edit-image">
          <div className="image-cont">
            <span class="material-icons">photo_camera</span>
          </div>
          <button type="button">Change Photo</button>
        </div>

        <label htmlFor="edit-name-field">Name</label>
        <input
          type="text"
          id="edit-name-field"
          placeholder="Enter your name..."
        />
        <label htmlFor="edit-bio-field">Bio</label>
        <input
          type="text"
          id="edit-bio-field"
          placeholder="Enter your bio..."
        />
        <label htmlFor="edit-phone-field">Phone</label>
        <input
          type="text"
          id="edit-phone-field"
          placeholder="Enter your phone..."
        />
        <label htmlFor="edit-email-field">Email</label>
        <input
          type="email"
          id="edit-email-field"
          placeholder="Enter your email..."
        />
        <label htmlFor="edit-password-field">Password</label>
        <input
          type="password"
          id="edit-password-field"
          placeholder="Enter your password..."
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUserInfo;
