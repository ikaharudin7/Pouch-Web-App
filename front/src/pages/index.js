import React, { Component } from 'react';
import Link from '@mui/material/Link';
import './index.css'
import ButtonBases from '../components/Button';
import { NavBtn } from '../components/Navbar/NavbarElements';

  
class Home extends Component {

    render() {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div class="container-left">
                  <ButtonBases /> 
                </div>
                <div className="container-right">
                  <h1 className="hero-title">Got a collection you want to feature? </h1>
                  <p className="hero-text">
                    NAME is an online community made for collectors of all items to showcase
                    their extensive collections and prized items.
                  </p>
                  <p className="hero-text"> 
                    Post your collection here and make it stand out to other collectors! 
                  </p>

                  <NavBtn className="signup-btn">
                    <Link href = "/signup" underline="hover" color = 'black' >
                      Get started here today!</Link>
                  </NavBtn>
                </div>
              </div>

              <div className="featured-body">
                <h1 className="featured-heading"> Browse Featured Collections</h1>
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
            
            
            <Link className="link" href = "/about" underline="hover" color = 'black' >
              Learn more
            </Link>
          </section>
        </div>
      );
    }

}
  
export default Home;