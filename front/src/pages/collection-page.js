import React, { Component } from 'react';
import Link from '@mui/material/Link';
import './collection-page.css'
import ButtonBases from '../components/Button';
import { NavBtn } from '../components/Navbar/NavbarElements';
import MediaCard from '../components/Media';

  
class CollectionView extends Component {
    render() {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <MediaCard></MediaCard>

                </div>
              

            </div>


          </section>
        </div>
      );
    }

}
  
export default CollectionView;