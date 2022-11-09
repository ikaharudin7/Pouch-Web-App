import React, { Component } from 'react';
import '../App.css'; 
import './my-profile.css';
import ButtonBases from '../components/Button';
import { Button } from '@mui/material';
import axios from 'axios';
import UploadButton from '../components/UploadButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

class Profile extends Component {
  state = {
    bio: [],
    username: null,
    edit: [false],
    img: null,
  };

  setImage = this.setState.bind(this);
  
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
      this.setState({img: response.data.img })
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
            
            

              <h1 className="hero-title" style = {{marginBottom: 0}}>About Me </h1>
              { this.state.edit ? (
                this.state.username ?
                  
                  
                  <div style={{display: "grid", gridTemplateColumns: "1fr auto", gridGap: "20px"}}>
                    {console.log(this.state.username)}
                    <div>
                      <Typography variant="h4" style={{ wordWrap: "break-word" }} fontWeight = "bold">
                        {this.state.username.toUpperCase()}
                      </Typography>
  
                      <Typography variant="h6" style={{ wordWrap: "break-word", marginTop: "10px", whiteSpace: "pre-wrap"}}>
                        {this.state.bio}  
                      </Typography>
                    </div>
                    {this.state.img && <img src={this.state.img} alt = {this.state.username} height={300} style = {{borderRadius: 10}}/>}
                    
                  </div>
                    
                : <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress />
                  </Box> 
              ) : null}


              <br></br>
              { !this.state.edit ?
              
              <form onSubmit={this.handleSubmit} id = "profile">
              
                <div>

                  
                  <div>
                    <label className='featured-heading'>
                      Upload a profile picture here:<br></br>
                      <UploadButton item = {this.state} setItem = {this.setImage}/> 
                    </label>
                  </div>
                  
                  
                  <div style={{paddingTop: "10px", paddingBottom: "10px"}}>
                    <label className='featured-heading'>
                        Enter your bio here: <br></br>
                        <TextField
                          id="bio"
                          name="bio"
                          multiline
                          fullWidth
                          defaultValue={this.state.bio}
                          onChange={this.handleChange}
                          sx = {{marginTop: "10px", backgroundColor: "white", whiteSpace: "pre-wrap"}}
                        />
                    </label>
                  
                    <br></br>
                      
                    <div style={{paddingTop: "10px", float: "right"}}>
                      <Button onClick={() => window.location.reload()}>
                        Cancel
                      </Button>
                      <Button type = "submit" form = "profile">
                        Submit
                      </Button>
                      
                    </div>

                  </div>

                  
                </div>
              </form>
              
              : null }
            
          </div>

            <div className="featured-body-end">
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