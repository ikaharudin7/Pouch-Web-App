import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css'; 
import './my-profile.css';
import ButtonBases from '../components/Button';
import { Button } from '@mui/material';


class Profile extends Component {
  state = {
    "HEllo" : "IAN",
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:8080/profile', {
        method: "POST",
        body: JSON.stringify({"HEY": "IAN"})
      }).then(()=> {
        console.log(this.state);
        console.log("POST sent");
      })
 
  }; 


  render() {
    return (
      <div>
      <section className="hero">
        <div className="hero-body">
          <Button className="edit-button">EDIT PAGE</Button>
          <div className="main">
            <div className="container-right">
              <h1 className="hero-title">About Me </h1>
              <p className="hero-text">
                BIO FOR USER GOES HERE
              </p>
              <br></br>

              <form onSubmit={this.handleSubmit}>
                <label>
                    Enter your bio here: <br></br>
                    <textarea id="bio" type="text" value={this.state.value} name="bio" onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>

            <div className="featured-body">
              <h1 className="featured-heading"> My Collections</h1>
            </div>
            <div className="panels-section">
                <div className="panel">
                <ButtonBases className="bottom-panels"/> 
                </div>
                <div className="bottom-panels">
                <ButtonBases /> 
                </div>
                <div className="bottom-panels">
                <ButtonBases /> 
                </div>
            </div>
          </div>    
      </section>
    </div>

    );
  }
}

export default Profile;