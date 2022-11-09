import React, { useState }  from "react";
import Axios from "axios";
import "./login.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';

function LoginForm() {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          <h1 className="login-text">Login</h1>
            <div style={{width: "300px"}} >
              <TextField
                id="username"
                fullWidth
                placeholder="Username"
                onChange={(e) => setLoginUsername(e.target.value)}
                sx = {{marginBottom: "10px", "& .MuiInputBase-root": {backgroundColor: "white"}}}
              />
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value)}
                sx = {{backgroundColor: "white"}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />

            </div>

          <div style={{padding: "10px"}}>
            <Button onClick={login} variant="contained" sx = {{backgroundColor: "transparent"}}>
              OK
            </Button>
          </div>
          
        </div>
      </div>
    </div> 
    
  );

};

export default LoginForm;