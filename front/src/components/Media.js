import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ViewItem from './ViewItem';
import EditItem from './EditItem';
import Dialog from '@mui/material/Dialog';

const cardheight = 300;
const imageheight = 180;

export default function MediaCard({prop}) {

  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    // if (reason !== 'backdropClick') {
      setOpen(false);
      setEdit(false);
      
  };

  const handleEditOpen = () => {
    setEdit(true);
  }

  const handleEditClose = () => {
    
  }



  return (
    <Card sx={{ width: 200, height: cardheight }}>
    <CardActionArea sx = {{height: cardheight}} onClick = {handleClickOpen}>
      <CardMedia
        component="img"
        image = {prop.img}
        alt={prop.alt}
        sx = {{height: imageheight, position: 'absolute', top: 0, objectFit: 'fill' }}
        
      />
      <CardContent sx = {{position: 'absolute', top: imageheight}}>
        <Typography gutterBottom variant="h5" component="div">
          {prop.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prop.desc}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {prop.date}
        </Typography>
      </CardContent>
    </CardActionArea>

    <Dialog 
      disableEscapeKeyDown 
      open={open} 
      onClose={handleClose} 
      fullWidth 
    >
      {console.log(edit)}
      {edit
        ? <EditItem card = {prop} handleClose = {handleClose} handleEditClose = {handleEditClose} />
        : <ViewItem card = {prop} handleClose = {handleClose} handleEditOpen = {handleEditOpen} />
      }
      
      
    
    </Dialog>
    

    </Card>
  );
}