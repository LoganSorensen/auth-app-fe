import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/devchallenges.svg";
import { ReactComponent as GoogleLogo } from "../assets/Google.svg";
import { ReactComponent as FacebookLogo } from "../assets/Facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/Twitter.svg";
import { ReactComponent as GithubLogo } from "../assets/Github.svg";

const RegistrationForm = () => {
  return (
    <div className="auth-form">
      <div className="logo">
        <Logo />
      </div>
      <h2>Join thousands of learners from around the world</h2>
      <p>
        Master web development by making real-life projects. There are multiple
        paths for you to choose.
      </p>
      <form>
        <div className="input-wrapper email-wrapper">
          <span className="material-icons email-icon">email</span>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-wrapper">
          <span className="material-icons lock-icon">lock</span>
          <input type="password" placeholder="Password" />
        </div>
        <button>Start coding now</button>
      </form>
      <p className="alt-auth-opt">or continue with</p>
      <div className="alt-auth-btns">
        <GoogleLogo className="logo-btn" />
        <FacebookLogo className="logo-btn" />
        <TwitterLogo className="logo-btn" />
        <GithubLogo className="logo-btn" />
      </div>
      <p className="switch-auth">
        Already a member? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
