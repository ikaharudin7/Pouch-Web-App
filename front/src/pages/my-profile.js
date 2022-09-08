import './my-profile.css'
import ButtonBases from '../components/Button';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

  
const Profile = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log('State is now: ', state);
  }, [state]);

  const editOn = event => {
    setState(true);
  };

  const editOff = event => {
    setState(false);
  };

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

              <form className="bio" action="/user/profile" method="post">
                { state ? <label type="text" className="input-text">Your bio here:</label> : null}
                { state ? <br></br> : null}
                { state ? <textarea className='bio-box' name="bio-section" type="text"> </textarea> : null}
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

export default Profile;