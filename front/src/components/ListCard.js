import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ViewItem from './ViewItem';
import EditItem from './EditItem';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';

const cardheight = 200;
const imageheight = 180;

export default function ListCard({card}) {

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
    setEdit(false);
  }



  return (
    <Card sx={{ width: "100%", height: cardheight, borderRadius: 2}}>
      <CardActionArea sx = {{height: cardheight}} onClick = {handleClickOpen}>
        <CardContent sx = {{top: imageheight}}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={16.1} sx ={{alignItems: "center", paddingLeft: "10px"}}>
              <Grid item xs={4} sx = {{paddingTop: "0"}}>
                <Typography variant="h5" style={{ wordWrap: "break-word" }}>
                  {card.name}
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={4}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  {card.desc}
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={4}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  {dayjs(card.date).toDate().toLocaleString()}
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  image = {card.img}
                  alt={card.alt}
                  sx = {{height: imageheight, top: 0, objectFit: 'fill', maxWidth: 200}}
                />
              </Grid>
                
            </Grid>
          </Box>
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
        ? <EditItem card = {card} handleClose = {handleClose} handleEditClose = {handleEditClose} />
        : <ViewItem card = {card} handleClose = {handleClose} handleEditOpen = {handleEditOpen} />
      }
      
      
    
    </Dialog>
    

    </Card>
  );
}