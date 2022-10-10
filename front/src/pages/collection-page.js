import React, { Component } from 'react';
import './collection-page.css'
// import CollectionGrid from '../components/Grid';
import PrimarySearchAppBar from '../components/SearchBar';
import DialogSelect from '../components/AddItem';
// import View from '../components/Menus/View';
// import SortBy from '../components/Menus/SortBy';
// import { Box } from '@mui/material';
// import { alignProperty } from '@mui/material/styles/cssUtils';
// import Typography from '@mui/material/Typography';

  
function CollectionView() {

    const [cards, setCards] = React.useState({});

    React.useEffect(() => {
      fetch('http://localhost:8080/view_collection')
        .then((res) => res.json())
        .then((cards) => setCards(cards));
    }, []);

    console.log(cards)
    
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="box">
                {/* NEED TO FORMAT THJIS */}
                {Object.keys(cards).length === 0 
                  ? (
                      <>
                        You have not added any items to your Collection 
                        <DialogSelect />
                      </>
                    )
                  : <PrimarySearchAppBar cards = {cards}/>}
              </div>
            </div>
          </section>
        </div>
      );
    

}
  
export default CollectionView;