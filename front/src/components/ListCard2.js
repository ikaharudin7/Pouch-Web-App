import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import ViewItem2 from './ViewItem2';

const cardheight = 200;
const imageheight = 180;

export default function ListCard2({card}) {

  const [open, setOpen] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);   
  };


  return (
    <Card sx={{ width: "100%", height: cardheight, borderRadius: 2, }}>
      <CardActionArea sx = {{height: cardheight}} onClick = {handleClickOpen}>
        <CardContent sx = {{top: imageheight, padding: 0}}>
 
            <Grid container columns={16.1} sx ={{alignItems: "center", paddingLeft: "10px"}}>
              <Grid item xs={4} style = {{padding: "10px"}}>
                <Typography variant="h5" style={{ wordWrap: "break-word" }}>
                  {card.name}
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={4} style = {{padding: "10px"}}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  {card.desc}
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={4} style = {{padding: "10px"}}>
                <Typography variant="body1" style={{ wordWrap: "break-word" }}>
                  {dayjs(card.date).toDate().toLocaleString()}
                </Typography>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item xs={4} style = {{padding: "10px"}}>
                <CardMedia
                  component="img"
                  image = {card.img}
                  alt={card.alt}
                  sx = {{height: imageheight, top: 0, objectFit: 'fill', maxWidth: 200}}
                />
              </Grid>
                
            </Grid>

        </CardContent>
      </CardActionArea>
      <Dialog 
        disableEscapeKeyDown 
        open={open} 
        onClose={handleClose} 
        fullWidth 
      >

        <ViewItem2 card = {card} handleClose = {handleClose}/>

      </Dialog>
    

    </Card>
  );
}