import React, { useState }  from "react";
import Axios from "axios";
import "./login.css";

function SignUpForm() {

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
    }).then((res) => {
      console.log(res.data)
      if (res.data ==="User Already Exists") {
        alert("User Already Exists");
        window.location.href = "http://localhost:3000/signup";
      }
      else {
        alert("Account Created! Try and login now");
        window.location.href = "http://localhost:3000/login";
      }
    });

  };


  return (
    <div className="App">
      <div className="login-form">
        <div className="form-box">
          <h1 className="login-text">Sign Up</h1>
          <input className="login-box"
            placeholder="Given Name"
            onChange={(e) => setRegisterFirstName(e.target.value)}
          />
          <input className="login-box"
            placeholder="Last Name"
            onChange={(e) => setRegisterLastName(e.target.value)}
          />
          <input className="login-box"
            placeholder="Email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input className="login-box"
            placeholder="Username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input className="login-box"
            type="password"
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button className="login-btn" onClick={register}>Submit</button>
        </div>

      </div>
    </div> 
    
  );

};

export default SignUpForm;