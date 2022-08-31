import React, { Component } from 'react';
import './index.css'
  
class Home extends Component {
    render() {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title"></h1>
                <div className="column">
                  <h2 className="subheadings">subheading</h2>
                </div>
              </div>
              <a className="button" id="learn"> Learn more</a>
            </div>
          </section>
        </div>
      );
    }

}
  
export default Home;