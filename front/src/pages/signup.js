import React from "react";
import './signup.css';

const SignupForm = () => {
  return (
      <div className="signup-form">
        <div className="form-box solid">
          <form>
            <h1 className="signup-text">Sign Up</h1>
            <label type="text" className="label-text">Username</label>
            <br></br>
            <input type="text" name="username" className="signup-box" />
            <br></br>
            <label type="text" className="label-text">Email</label>
            <br></br>
            <input type="text" name="username" className="signup-box" />
            <br></br>
            <label type="text" className="label-text">Password</label>
            <br></br>
            <input type="password" name="password" className="signup-box" />
            <br></br>
            <label type="text" className="label-text">Confirm Password</label>
            <br></br>
            <input type="text" name="username" className="signup-box" />
            <br></br>
            <input type="submit" value="SIGN UP" className="signup-btn" />
          </form>
        </div>
      </div>
  );
};

export default SignupForm;