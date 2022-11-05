import React, { Component } from 'react';
import './index.css'
import './collection-page.css'
import DialogSelect from '../components/AddItem';
import { Typography } from '@mui/material';
import UserCollection from '../components/UserCollection';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

  
function Browse() {

    const [users, setUsers] = React.useState({});
    const [load, setLoad] = React.useState(false);

    // Change when user post works
    React.useEffect(() => {
      fetch('http://localhost:8080/browse_collection', {
        method: "GET",
        headers: {"Access-Control-Allow-Origin": "*"}
      })
        .then((res) => res.json())
        .then((users) => setUsers(users))
        .then((load) => setLoad(true));

    }, []);
  

      return (
        <div>
          <section className="hero">
            <div className="hero-body">
              <div className="featured-body">
                <h1 className="featured-heading"> Browse Featured Users</h1>
              </div>


              {load === false
                ? (
                  <div>

                        <div className="box">
                          
                          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            <CircularProgress />
                          </Box>
                        </div>

                  </div>
                )
                : (
                  <div>

                        <div className="box">
                          {Object.keys(users).length === 0 
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
                            : <UserCollection users = {users}/>}
                        </div>

                  </div>
                )
              }
            </div>
          </section>
        </div>
      );
    }


  
export default Browse;