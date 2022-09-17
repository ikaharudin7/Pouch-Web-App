import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css'; 
import './my-profile.css';
import ButtonBases from '../components/Button';
import { Button } from '@mui/material';


class Profile extends Component {
state = {
    data: null
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:8080/profile', {
        method: "POST",
        body: JSON.stringify({"title": "defaulttitle"})
      }).then(()=> {
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
                  Name:
                  <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
              </label>
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
/*
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          { !state ? <Button className="edit-button" onClick={editOn}>EDIT PAGE</Button> : null}
          <div className="main">
            <div className="container-right">
              <h1 className="hero-title">About Me </h1>
              { !state ? <p className="hero-text">
                BIO FOR USER GOES HERE
              </p> : null}
              <br></br>

<<<<<<< Updated upstream
              <form className="bio" action="/user/profile" method="post">
=======
              <form className="bio" onSubmit={this.handleSubmit}>
>>>>>>> Stashed changes
                { state ? <label type="text" className="input-text">Your bio here:</label> : null}
                { state ? <br></br> : null}
                { state ? <textarea className='bio-box' name="bio-section" type="submit" value="s"> </textarea> : null}
                <br></br>
                { state ? <Button className="edit-button" type="submit" onClick={editOff}>SAVE</Button> : null}
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

export default Profile; */