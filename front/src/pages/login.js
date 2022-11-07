import React, { useState }  from "react";
import Axios from "axios";
import "./login.css";

function LoginForm() {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  

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