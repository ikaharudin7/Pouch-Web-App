import React, { useState }  from "react";
import Axios from "axios";
import "./login.css";

function LoginForm() {

  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
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

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:8080/login",
    }).then((res) => {
      console.log(res.data);
      let data = res.data;
      if (data.username) {
        loadServer(data.username);
        const newWindow = window.open("http://localhost:3000/profile", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        window.location.href = "http://localhost:8080/profile";

      } else {
        window.location.href = "http://localhost:3000/login";
        alert("Wrong username or password");
      }
    });
  };

  const loadServer = (data) => {
    fetch('http//localhost:8080/profile', {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
  }

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
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button className="login-btn" onClick={register}>Submit</button>
        </div>

        <div className="form-box">
          <h1 className="login-text">Login</h1>
          <input className="login-box"
            placeholder="Username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input className="login-box"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button className="login-btn" onClick={login}>Submit</button>
        </div>
      </div>
    </div> 
    
  );

};

export default LoginForm;