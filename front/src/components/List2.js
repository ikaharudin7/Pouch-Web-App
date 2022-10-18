import * as React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListCard2 from './ListCard2.js';

export default function CollectionList2({filteredCards}) {
    
    return (    
        <>
          <Box sx={{ flexGrow: 1, paddingBottom: "10px" }}>
            <Grid container columns={16} sx ={{alignItems: "center", paddingLeft: "10px"}}>
              <Grid item xs={4}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  Name
                </Typography>
              </Grid>


              <Grid item xs={4}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  Description
                </Typography>
              </Grid>


              <Grid item xs={3.9}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  Date
                </Typography>
              </Grid>


              <Grid item xs={4}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  Image
                </Typography>
              </Grid>  
            </Grid>
          </Box>

            {filteredCards.map((card) => (
                <Grid item key={card.date} sx = {{paddingBottom: "15px"}} >
                    <ListCard2 card = {card} />
                </Grid>
            ))}

        </>

    )
}
