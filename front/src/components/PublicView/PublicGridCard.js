import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PublicViewItem from './PublicViewItem';
import Dialog from '@mui/material/Dialog';

const cardheight = 320;
const imageheight = 180;

export default function PublicCard({card}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);   
  };

  return (
    <Card sx={{ width: 200, height: cardheight }}>
    <CardActionArea sx = {{height: cardheight}} onClick = {handleClickOpen}>
      <CardMedia
        component="img"
        image = {card.img}
        alt={card.alt}
        sx = {{height: imageheight, position: 'absolute', top: 0, objectFit: 'fill' }}
        
      />
      <CardContent sx = {{position: 'absolute', top: imageheight}}>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.desc}
        </Typography>
      </CardContent>
    </CardActionArea>

    <Dialog 
      disableEscapeKeyDown 
      open={open} 
      onClose={handleClose} 
      maxWidth = "90%"
    >

    <PublicViewItem card = {card} handleClose = {handleClose}/>

    </Dialog>
    

    </Card>
  );
}