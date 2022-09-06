import React, { Component } from 'react';
import './collection-page.css'
import CollectionGrid from '../components/Grid';
  
class CollectionView extends Component {
    render() {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
                <div className="box">
                    <CollectionGrid />
                </div>
            </div>
          </section>
        </div>
      );
    }

}
  
export default CollectionView;