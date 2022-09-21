import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const cardheight = 300;
const imageheight = 180;

export default function MediaCard({prop}) {
  return (
    <Card sx={{ width: 200, height: cardheight }}>
    <CardActionArea sx = {{height: cardheight}}>
      <CardMedia
        component="img"
        image = {prop.image}
        alt={prop.alt}
        sx = {{height: imageheight, position: 'absolute', top: 0, objectFit: 'fill' }}
        
      />
      <CardContent sx = {{position: 'absolute', top: imageheight}}>
        <Typography gutterBottom variant="h5" component="div">
          {prop.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prop.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}