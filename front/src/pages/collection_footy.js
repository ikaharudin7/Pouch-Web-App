import React, { Component } from 'react';
import './collection-page.css'
// import CollectionGrid from '../components/Grid';
import PrimarySearchAppBar from '../components/SearchBar';
import DialogSelect from '../components/AddItem';
import { Typography } from '@mui/material';
// import View from '../components/Menus/View';
// import SortBy from '../components/Menus/SortBy';
// import { Box } from '@mui/material';
// import { alignProperty } from '@mui/material/styles/cssUtils';
// import Typography from '@mui/material/Typography';

  
function CollectionFooty() {

    const [cards, setCards] = React.useState({});

    React.useEffect(() => {
      fetch('http://localhost:8080/browse_footy', {
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*"}
      })
        .then((res) => res.json())
        .then((cards) => setCards(cards));
    }, []);


    console.log(cards)

    if (Object.keys(cards).length === 0) {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="box">
                
                        <div>
                          <Typography style={{textAlign: "center"}}>You have not added any items to your Collection </Typography>
                        </div>
                        <div style={{textAlign: "center"}}>
                          <DialogSelect/>
                        </div>

              </div>
            </div>
          </section>
        </div>
      );
    }


    
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="box">
                {/* NEED TO FORMAT THJIS */}
                {Object.keys(cards).length === 0 
                  ? (
                      <>
                        <div>
                          <Typography style={{textAlign: "center"}}>You have not added any items to your Collection </Typography>
                        </div>
                        <div style={{textAlign: "center"}}>
                          <DialogSelect/>
                        </div>
                      </>
                    )
                  : <PrimarySearchAppBar cards = {cards}/>}
              </div>
            </div>
          </section>
        </div>
      );
    

}
  
export default CollectionFooty;