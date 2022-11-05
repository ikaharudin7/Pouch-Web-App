import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css'; 
import './my-profile.css';
import ButtonBases from '../components/Button';
import { Button } from '@mui/material';
import axios from 'axios';
import UploadButton from '../components/UploadButton';

class Profile extends Component {
  state = {
    bio: [],
    username: [],
    edit: [false],
    img: null,
  };

  setTest = this.setState.bind(this);
  
  handleTest = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/login', {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
      })
      .then((res)=> console.log(res))

  }
  
  componentDidMount() {
    axios.get("http://localhost:8080/profile", { withCredentials: true}).then((response) => {
      console.log(response.data.username);
      this.setState({username: response.data.username});
      this.setState({bio: response.data.bio});
      console.log(this.state);
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    this.setState({edit: true})
    
    fetch('http://localhost:8080/profile', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res)=> console.log(res))

    //this.getData(event);
    window.location.href = "http://localhost:3000/profile"
  }; 

  editOn = (event) => {
    this.setState({edit: false})
  }

  editOff = (click) => {
    this.setState({edit: true})
  }

  render() {
    return (
      <div>
      <section className="hero">
        <div className="hero-body">
          { this.state.edit ? <Button onClick={this.editOn} className="edit-button">EDIT PAGE</Button> : <></>}
          <div className="main">
            <div className="container-right">
              <h1 className="hero-title">About Me </h1>
              { this.state.edit ? <p className="hero-text">
                {this.state.bio}
              </p> : null }
              <br></br>
              { !this.state.edit ?
              <form onSubmit={this.handleSubmit}>
                <label className='featured-heading'>
                    Enter your bio here: <br></br>
                    <textarea id="bio" type="text" value={this.state.value} name="bio" onChange={this.handleChange} />
                </label>
                <br></br>
                <UploadButton item = {this.state} setItem = {this.setTest}/>


                <input className='featured-heading' type="submit" value="Submit" />
              </form>
              : null }
            </div>
          </div>

            <div className="featured-body">
              <h1 className="featured-heading">
                <a href="/collection-page">View My Collection Here!</a>
                      </h1>
              
            </div>
            { false ? <div className="panels-section">
                <div className="panel">
                <ButtonBases className="bottom-panels"/> 
                </div>
                <div className="bottom-panels">
                <ButtonBases /> 
                </div>
                <div className="bottom-panels">
                <ButtonBases /> 
                </div>
            </div> : null }
          </div>
      </section>
    </div>
    );
  }
}

export default Profile;