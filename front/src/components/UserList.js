import * as React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserListCard from './UserListCard.js';

export default function UserList({filteredCards}) {
    
    return (    
        <>
          <Box sx={{ flexGrow: 1, paddingBottom: "10px" }}>
            <Grid container columns={16.1} sx ={{alignItems: "center", paddingLeft: "10px"}}>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  Username
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  Profile Picture
                </Typography>
              </Grid>  
            </Grid>
          </Box>

            {filteredCards.map((card) => (
                <Grid item key={card.date} sx = {{paddingBottom: "15px"}} >
                    <UserListCard card = {card} />
                </Grid>
            ))}

        </>

    )
}
