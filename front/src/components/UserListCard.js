import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


const cardheight = 200;
const imageheight = 180;

export default function UserListCard({card}) {

  return (
    <Link href = {`/user-collection/${card.username}`} underline = 'none'>
      <Card sx={{ width: "100%", height: cardheight, borderRadius: 2, }}>
        <CardActionArea sx = {{height: cardheight}}>
          <CardContent sx = {{top: imageheight, padding: 0}}>

          <Grid container columns={2} sx ={{paddingLeft: "10px"}}>
              <Grid item xs = {1} style = {{padding: "10px", alignSelf: "center", overflow: "auto"}}>
                <Typography variant="h4" style={{wordWrap: "break-word" }}>
                  {card.username}
                </Typography>
                <Typography variant="subtitle1" style={{ wordWrap: "break-word", color: 'grey' }}>
                  {card.bio}
                </Typography>
              </Grid>

              <Grid item xs = {1} style = {{padding: "10px"}}>
                {card.img && <CardMedia
                  component="img"
                  image = {card.img}
                  alt={card.alt}
                  sx = {{height: imageheight, top: 0, objectFit: 'fill', maxWidth: 180, borderRadius: 2, float: "right"}}
                /> }
              </Grid>
                
            </Grid>



          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}