import * as React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListCard2 from './ListCard2.js';

export default function CollectionList2({filteredCards}) {
    
    return (    
        <>
          <Box sx={{ flexGrow: 1}}>
            <Grid container columns={4} sx ={{alignItems: "center", paddingLeft: "10px"}}>
              <Grid item xs={1}>
                <Typography variant="body1" fontWeight = "bolder" style={{ wordWrap: "break-word" , padding: "10px"}}>
                  Name
                </Typography>
              </Grid>


              <Grid item xs={1}>
                <Typography variant="body1" fontWeight = "bolder" style={{ wordWrap: "break-word" , padding: "10px"}}>
                  Description
                </Typography>
              </Grid>


              <Grid item xs={1}>
                <Typography variant="body1" fontWeight = "bolder" style={{ wordWrap: "break-word" , padding: "10px"}}>
                  Date
                </Typography>
              </Grid>


              <Grid item xs={1}>
                <Typography variant="body1" fontWeight = "bolder" style={{ wordWrap: "break-word" , padding: "10px"}}>
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
