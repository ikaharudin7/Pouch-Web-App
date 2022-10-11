import React, { useState }  from "react";
import Axios from "axios";
import "./login.css";

function LoginForm() {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

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

    <div className="login-form">
      <div className="form-box solid">
        <form action='/profile' onSubmit={login}>
          <h1 className="login-text">Login</h1>
          <label type="text" className="label-text">Username</label>
          <br></br>
          <input id="username" type="text" name="username" className="login-box" onChange={(e) => setLoginUsername(e.target.value)}/>
          <br></br>
          <label type="text" className="label-text">Password</label>
          <br></br>
          <input id="password" type="password" name="password" className="login-box" onChange={(e) => setLoginPassword(e.target.value)}/>
          <br></br>
          <input type="submit" value="LOGIN" className="login-btn" />
        </form>
      </div>
    </div>
    
  );

};

export default LoginForm;