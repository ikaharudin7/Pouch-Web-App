import React, { Component } from 'react';
import './collection-page.css'
import Collection from '../components/Collection';
import DialogSelect from '../components/AddItem';
import { Typography } from '@mui/material';
import Axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";

  
function UserCollection() {

    const [cards, setCards] = React.useState({});
    const [load, setLoad] = React.useState(false);
    const [userid, setUserid] = React.useState();

    const { username } = useParams()
    

    React.useEffect(() => {
      Axios.get("http://localhost:8080/login", { withCredentials: true})
      .then((response) => {       
        //setUserid(response.data.user._id)
        console.log(window.location.state)
    })    
    }, [userid]);

    React.useEffect(() => {
      fetch(`http://localhost:8080/collections/view_collection/${username}`, {
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*", "id":userid}
      })
        .then((res) => res.json())
        .then((cards) => setCards(cards))
        .then((load) => setLoad(true));
        console.log(window.location)
    }, [userid]);



    if (load == false) {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              
              <div className="box">
              <br></br>
              
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
              <p className="hero-title"> {username}'s Collection</p>  
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
                  : <Collection cards = {cards}/>}
              </div>
            </div>
          </section>
        </div>
      );
    

}
  
export default UserCollection;