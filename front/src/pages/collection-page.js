import React, { Component } from 'react';
import './collection-page.css'
import CollectionGrid from '../components/Grid';
import PrimarySearchAppBar from '../components/SearchBar';
import View from '../components/Menus/View';
import SortBy from '../components/Menus/SortBy';
import { Box } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Typography from '@mui/material/Typography';
import Search from '../components/Search';
import cards from '../test/items.js'

  
class CollectionView extends Component {
    render() {
      return (
        <div>
          {/* <Search details={cards}/> */}
          <section className="hero">
            <div className="hero-body">
              <div className="box">
                <PrimarySearchAppBar details = {cards}/>
              </div>
              {/* Make this dynamic or replace with progress bar? */}
              <div className = 'text-box'><Typography>showing 1 - 8</Typography>
              
                <div className='flex-box'>
                  <View />
                  {/* <SortBy /> */}
                </div>
              </div>
              
              
              {/* <div className="box">
                <CollectionGrid />
              </div> */}
            </div>
          </section>
        </div>
      );
    }

}
  
export default CollectionView;