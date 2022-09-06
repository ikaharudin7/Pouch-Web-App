import React, { Component } from 'react';
import './my-profile.css'
import ButtonBases from '../components/Button';
import { Button } from '@mui/material';

  
class Profile extends Component {
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
                    DESCRIPTION FOR USER GOES HERE (WHEN EDIT MODE FALSE)
                  </p>
                  <br></br>

                  <label type="text" className="input-text">Enter Bio Here 
                    (Should only appear when EDIT MODE TRUE)
                  </label>
                  <br></br>
                  <textarea className='bio-box'></textarea> 
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