import React, { Component } from 'react';
import './collection-page.css'
import DialogSelect from '../components/AddItem';
import { Typography } from '@mui/material';
import Collection2 from '../components/Collection2';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

  
function CollectionBasketball() {

  const [cards, setCards] = React.useState({});
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    fetch('http://localhost:8080/browse_basketball', {
      method: "GET",
      headers: {"Access-Control-Allow-Origin": "*"}
    })
      .then((res) => res.json())
      .then((cards) => setCards(cards))
      .then((load) => setLoad(true));

  }, []);


  if (load == false) {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="box">
              
              <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <CircularProgress />
                {/* <Typography style={{textAlign: "center"}}>Loading... </Typography> */}
              </Box>
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
                : <Collection2 cards = {cards}/>}
            </div>
          </div>
        </section>
      </div>
    );
    

}
  
export default CollectionBasketball;