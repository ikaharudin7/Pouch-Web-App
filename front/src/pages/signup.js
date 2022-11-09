import React, { useState }  from "react";
import Axios from "axios";
import "./signup.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';

function SignUpForm() {

  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
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
          <h1 className="signup-text">Sign Up</h1>
          <div style={{width: "300px"}} >

          
            <TextField
              id="Given Name"
              fullWidth
              placeholder="Given Name"
              onChange={(e) => setRegisterFirstName(e.target.value)}
              sx = {{marginBottom: "10px", "& .MuiInputBase-root": {backgroundColor: "white"}}}
            />

            <TextField
              id="Last Name"
              fullWidth
              placeholder="Last Name"
              onChange={(e) => setRegisterLastName(e.target.value)}
              sx = {{marginBottom: "10px", "& .MuiInputBase-root": {backgroundColor: "white"}}}
            />

            <TextField
              id="Email"
              fullWidth
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
              sx = {{marginBottom: "10px", "& .MuiInputBase-root": {backgroundColor: "white"}}}
            />

            <Divider style={{marginBottom: "20px", marginTop: "10px", backgroundColor: "rgb(50,50,50)"}}/>

            <TextField
              id="Username"
              fullWidth
              placeholder="Username"
              onChange={(e) => setRegisterUsername(e.target.value)}
              sx = {{marginBottom: "10px", "& .MuiInputBase-root": {backgroundColor: "white"}}}
            />

            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
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
            <Button onClick={register} variant="contained" sx = {{backgroundColor: "transparent"}}>
              OK
            </Button>
          </div>
          
        </div>

      </div>
    </div> 
    
  );

};

export default SignUpForm;