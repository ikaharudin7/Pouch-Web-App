import React, { useState }  from "react";
import Axios from "axios";
import {Routes, Route, useNavigate} from "react-router-dom";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElements";
import './signup.css';

function SignupForm() {
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        firstname: registerFirstName,
        lastname: registerLastName,
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:8080/signup",
    }).then((res) => console.log(res.data));
  };

    return (
        <div className="signup-form">
          <div className="form-box solid">
            <form id="signup" onSubmit={register}>
              <h1 className="signup-text">Sign Up</h1>
              <label type="text" className="label-text">First Name</label>
              <br></br>
              <input id="firstname" type="text" name="firstname" onChange={(e) => setRegisterFirstName(e.target.value)} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Last Name</label>
              <br></br>
              <input id="lastname" type="text" name="lastname" onChange={(e) => setRegisterLastName(e.target.value)} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Email</label>
              <br></br>
              <input id="email" type="text" name="email" onChange={(e) => setRegisterEmail(e.target.value)} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Username</label>
              <br></br>
              <input id="username" type="text" name="username" onChange={(e) => setRegisterUsername(e.target.value)} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Password</label>
              <br></br>
              <input id="password" type="password" name="password" onChange={(e) => setRegisterPassword(e.target.value)} className="signup-box" />
              <br></br>
              <input type="submit" form="signup" value="SIGN UP" className="signup-btn" ></input>
            </form>
          </div>
        </div>
    );

};

export default SignupForm;

/*
<div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="firstname"
          onChange={(e) => setRegisterFirstName(e.target.value)}
        />
        <input
          placeholder="lastname"
          onChange={(e) => setRegisterLastName(e.target.value)}
        />
        <input
          placeholder="email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
    </div> */