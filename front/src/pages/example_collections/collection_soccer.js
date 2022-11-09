import React from 'react';
import '../collection-page.css'
import { Typography } from '@mui/material';
import Collection2 from '../../components/PublicView/PublicCollection';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

  
function CollectionSoccer() {

  const [cards, setCards] = React.useState({});
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    fetch('http://localhost:8080/browse_soccer', {
      method: "GET",
      headers: {"Access-Control-Allow-Origin": "*"}
    })
      .then((res) => res.json())
      .then((cards) => setCards(cards))
      .then((load) => setLoad(true));

  }, []);


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
  
export default CollectionSoccer;