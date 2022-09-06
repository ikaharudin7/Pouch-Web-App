import React from "react";
import "./login.css";

const LoginForm = () => {
  return (
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Login</h1>
            <label type="text" className="label-text">Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label type="text" className="label-text">Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
  );
};

export default LoginForm;