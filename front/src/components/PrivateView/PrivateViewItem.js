import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';


export default function PrivateViewItem({card, handleClose, handleEditOpen}) {


  return (
    <>
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent sx ={{paddingBottom: 0}}>
          
          <Box component="div" sx={{ display: 'block', flexWrap: 'wrap', m: 1}}>
            

            <div>
              <div style = {{textAlign: 'center'}}>
                  <img src={card.img} alt = {card.name} style = {{maxHeight: "500pt", maxWidth: "100%"}} />
                  
              </div>
              <div>
                <Typography variant = "subtitle2" sx = {{paddingTop: "10px"}}>
                    Description: 
                    
                </Typography>
                <Typography variant = "body1" sx = {{paddingBottom: "10px"}}>
                    
                    {card.desc}
                </Typography>
              </div>
              <div>
                <Typography variant = "subtitle2">
                    Date added: 
                    
                </Typography>
                <Typography variant = "body1">
                    
                    {dayjs(card.date).toDate().toLocaleString()}
                </Typography>
              </div>
              
            </div>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleEditOpen}>
            Edit
          </Button>
          <Button onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
    </>
  );
}
