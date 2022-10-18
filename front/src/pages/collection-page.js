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
import Axios from "axios"
  
function CollectionView() {

    const [cards, setCards] = React.useState({});

    const [userid, setUserid] = React.useState();

    React.useEffect(() => {
      Axios.get("http://localhost:8080/login", { withCredentials: true})
      .then((response) => {       
        setUserid(response.data.user._id)
        console.log(userid)
    })    
    }, [userid]);

    React.useEffect(() => {
      fetch('http://localhost:8080/collections/view_collection', {
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*", "id":userid}
      })
        .then((res) => res.json())
        .then((cards) => setCards(cards));
    }, [userid]);


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
  
export default CollectionView;