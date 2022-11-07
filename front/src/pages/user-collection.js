import React from 'react';
import './collection-page.css'
import Collection2 from '../components/Collection2';
import DialogSelect from '../components/AddItem';
import { Typography } from '@mui/material';
import Axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";

  
function UserCollection() {

    const [cards, setCards] = React.useState({});
    const [load, setLoad] = React.useState(false);

    const { username } = useParams()
    

    React.useEffect(() => {
      Axios.get("http://localhost:8080/login", { withCredentials: true})
      .then((response) => {       
        console.log(window.location.state)
    })    
    }, []);

    React.useEffect(() => {
      fetch(`http://localhost:8080/collections/view_collection/${username}`, {
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*"}
      })
        .then((res) => res.json())
        .then((cards) => setCards(cards))
        .then((load) => setLoad(true));
        console.log(window.location)
    }, [username]);



    if (load === false) {
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="box">
                
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                  <CircularProgress />
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
                          <Typography style={{textAlign: "center"}}>This user has not added any items to their Collection </Typography>
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
  
export default UserCollection;