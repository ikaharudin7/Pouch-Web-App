import React, { Component } from "react";
import "./login.css";

class LoginForm extends Component {

  state = {

  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    
    fetch('http://localhost:8080/login', {
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
  }; 

  

  render() {
    return (
        <div className="login-form">
          <div className="form-box solid">
            <form action='/profile' onSubmit={this.handleSubmit}>
              <h1 className="login-text">Login</h1>
              <label type="text" className="label-text">Username</label>
              <br></br>
              <input id="username" type="text" name="username" className="login-box" value={this.state.value} onChange={this.handleChange}/>
              <br></br>
              <label type="text" className="label-text">Password</label>
              <br></br>
              <input id="password" type="password" name="password" className="login-box" value={this.state.value} onChange={this.handleChange}/>
              <br></br>
              <input type="submit" value="LOGIN" className="login-btn" />
            </form>
          </div>
        </div>
    );
  }
};

export default LoginForm;