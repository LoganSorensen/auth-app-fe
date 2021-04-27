import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/devchallenges.svg";
import { ReactComponent as GoogleLogo } from "../assets/Google.svg";
import { ReactComponent as FacebookLogo } from "../assets/Facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/Twitter.svg";
import { ReactComponent as GithubLogo } from "../assets/Github.svg";

const LoginForm = () => {
  return (
    <div className="auth-form login-form">
      <div className="logo">
        <Logo />
      </div>
      <h2>Login</h2>
      <form>
        <div className="input-wrapper email-wrapper">
          <span className="material-icons email-icon">email</span>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-wrapper">
          <span className="material-icons lock-icon">lock</span>
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
      </form>
      <p className="alt-auth-opt">or continue with</p>
      <div className="alt-auth-btns">
        <GoogleLogo className="logo-btn" />
        <FacebookLogo className="logo-btn" />
        <TwitterLogo className="logo-btn" />
        <GithubLogo className="logo-btn" />
      </div>
      <p className="switch-auth">
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;
