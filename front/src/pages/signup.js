import React, { Component } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElements";
import './signup.css';

class SignupForm extends Component {
  state = {

  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    
    fetch('http://localhost:8080/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res)=> res.json())
      .then(()=> {
        console.log(data);
        console.log(JSON.stringify(data));
        console.log("POST sent");
      })
      window.location.href = "http://localhost:3000/login"
  }; 

  render() {
    return (
        <div className="signup-form">
          <div className="form-box solid">
            <form id="signup" onSubmit={this.handleSubmit}>
              <h1 className="signup-text">Sign Up</h1>
              <label type="text" className="label-text">First Name</label>
              <br></br>
              <input id="firstname" type="text" name="firstname" value={this.state.value} onChange={this.handleChange} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Last Name</label>
              <br></br>
              <input id="lastname" type="text" name="lastname" value={this.state.value} onChange={this.handleChange} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Email</label>
              <br></br>
              <input id="email" type="text" name="email" value={this.state.value} onChange={this.handleChange} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Username</label>
              <br></br>
              <input id="username" type="text" name="username" value={this.state.value} onChange={this.handleChange} className="signup-box" />
              <br></br>
              <label type="text" className="label-text">Password</label>
              <br></br>
              <input id="password" type="password" name="password" value={this.state.value} onChange={this.handleChange} className="signup-box" />
              <br></br>
              <input type="submit" form="signup" value="SIGN UP" className="signup-btn" ></input>
            </form>
          </div>
        </div>
    );
  }
};

export default SignupForm;