import React from 'react';
import Link from '@mui/material/Link';
import './index.css'
import FeaturedCollection from '../components/FeaturedCollection';
import { NavBtn } from '../components/Navbar/NavbarElements';
import Grid from '@mui/material/Grid';
  
function Home() {

    // Fetch collection you want to display from here
    // const [collections, setCollections] = React.useState({});

    // React.useEffect(() => {
    //   fetch('http://localhost:8080/view_collection', {
    //     method: "GET",
    //     headers: {"Access-Control-Allow-Origin": "*"}
    //   })
    //     .then((res) => res.json())
    //     .then((collections) => setCollections(collections));
    // }, []);

    const collections = [
      {
        img: 'zekrom.png',
        name: 'Pokemon', 
        width: '100%',
        href: '/collection_1',
      },
      {
        img: 'ronaldo.png.png',
        name: 'Soccer Legends', 
        width: '100%',
        href: '/collection_2',
      },
      {
        img: 'bontempelli.png',
        name: 'AFL Legends', 
        width: '100%',
        href: '/collection_3',
      },
      {
        img: 'kobe.jpg',
        name: 'NBA Legends', 
        width: '100%',
        href: '/collection_4',
      },
    ];

    
    // Fischer-Yates algorithm code from https://sebhastian.com/fisher-yates-shuffle-javascript/
    function fyShuffle(arr) {
      let i = arr.length;
      while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
      }
      return arr;
    }
    
    // Randomises order of collections
    const randomCollection = fyShuffle(collections)
    // Removes the first collection
    const firstCollection = randomCollection.shift()
    
    console.log(randomCollection)
      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div className="container-left">
                  <FeaturedCollection collection = {firstCollection}/>
                </div>
                <div className="container-right">
                  <h1 className="hero-title">Got a collection you want to feature? </h1>
                  <p className="hero-text">
                    POUCH is an online community made for collectors of all items to showcase
                    their extensive collections and prized items.
                  </p>
                  <p className="hero-text"> 
                    Post your collection here and make it stand out to other collectors! 
                  </p>

                  <NavBtn className="signup-btn">
                    <Link href = "/signup" underline="hover" color = 'black' >
                      Get started here today!</Link>
                  </NavBtn>
                </div>
              </div>
              
              <div className="featured-body-start">
                <h1 className="featured-heading"> Browse Featured Collections</h1>
              </div>
              <div className="featured-body-end" style={{paddingBottom: "40px"}}>
  
              
                <Grid container columns={3} spacing={3}>
                  {randomCollection.map((collection) => (
                      <Grid item xs = {3} md = {1} key = {collection.name}>
                          <FeaturedCollection collection = {collection}/>
                      </Grid>
                  ))}
                </Grid>

       

              </div>
              {/* <div style={{paddingTop: "10px"}}>
                <Link className="link" href = "/about" underline="hover" color = 'black'>
                  Learn more
                </Link>
              </div> */}
            </div>
            
            
            
          </section>
        </div>
      );
    }


  
export default Home;