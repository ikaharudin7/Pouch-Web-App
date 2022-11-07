import React from 'react';
import Link from '@mui/material/Link';
import './index.css'
import ButtonBases from '../components/Button';
import ButtonBases2 from '../components/Button2';
import { NavBtn } from '../components/Navbar/NavbarElements';
import ButtonBases3 from '../components/Button3';
import ButtonBases4 from '../components/Button4';
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
  

      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <div class="container-left">
                  {/* set which collection you want to display */}
                  {/* <ButtonBases collection = {collections[0]}/>  */}
                  <ButtonBases /> 
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
  
              
                <Grid container columns={3}>
                  <Grid item xs = {3} md = {1} style = {{padding: "10px"}}>
                    <ButtonBases2 /> 
                    {/* <ButtonBases collection = {collections[0]}/>  */}
                  </Grid>
                  <Grid item xs = {3} md = {1} style = {{padding: "10px"}}>
                    <ButtonBases3 /> 
                    {/* <ButtonBases collection = {collections[0]}/>  */}
                  </Grid>
                  <Grid item xs = {3} md = {1} style = {{padding: "10px"}}>
                    <ButtonBases4 /> 
                    {/* <ButtonBases collection = {collections[0]}/>  */}
                  </Grid>
                </Grid>

       

              </div>
              <div style={{paddingTop: "10px"}}>
                <Link className="link" href = "/about" underline="hover" color = 'black'>
                  Learn more
                </Link>
              </div>
            </div>
            
            
            
          </section>
        </div>
      );
    }


  
export default Home;