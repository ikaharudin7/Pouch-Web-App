import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const cardheight = 200;
const imageheight = 180;

export default function UserListCard({card}) {

  


  return (
    // Change href to user's list


    <Link href = {`/user-collection/${card.username}`} underline = 'none'>
      <Card sx={{ width: "100%", height: cardheight, borderRadius: 2, }}>
        <CardActionArea sx = {{height: cardheight}}>
          <CardContent sx = {{top: imageheight, padding: 0}}>
  
              <Grid container columns={16.1} sx ={{alignItems: "center", paddingLeft: "10px"}}>
                <Grid item xs={12} style = {{padding: "10px"}}>
                  <Typography variant="h5" style={{ wordWrap: "break-word" }}>
                    {card.username}
                  </Typography>
                </Grid>
                {/* Uncomment when you add profile image
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs={4} style = {{padding: "10px"}}>
                  <CardMedia
                    component="img"
                    image = {card.img}
                    alt={card.alt}
                    sx = {{height: imageheight, top: 0, objectFit: 'fill', maxWidth: 200}}
                  />
                </Grid> */}
                  
              </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}