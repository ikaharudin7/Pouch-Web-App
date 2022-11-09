import React from 'react';
import './collection-page.css'
import PrivateCollection from '../components/PrivateView/PrivateCollection';
import AddItem from '../components/PrivateView/AddItem';
import { Typography } from '@mui/material';
import Axios from "axios"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

  
function CollectionView() {

    const [cards, setCards] = React.useState({});
    const [load, setLoad] = React.useState(false);
    const [userid, setUserid] = React.useState();

    React.useEffect(() => {
      Axios.get("http://localhost:8080/login", { withCredentials: true})
      .then((response) => {       
        setUserid(response.data.user._id)
        console.log(userid)
      })
      if (userid) {
        fetch('http://localhost:8080/collections/view_collection', {
            method: "GET",
            headers: {"Access-Control-Allow-Origin": "*", "id":userid}
          })
            .then((res) => res.json())
            .then((cards) => setCards(cards))
            .then((load) => setLoad(true));
      }
    }, [userid]);

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
                        <Typography style={{textAlign: "center"}}>You have not added any items to your Collection </Typography>
                      </div>
                      <div style={{textAlign: "center"}}>
                        <AddItem/>
                      </div>
                    </>
                  )
                : <PrivateCollection cards = {cards}/>}
            </div>
          </div>
        </section>
      </div>
    );
    

}
  
export default CollectionView;