import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';


export default function ViewItem({card, handleClose, handleEditOpen}) {

  const imageHeight = "500px"
  return (
    <>
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent sx ={{paddingBottom: 0}}>
          
          <Box component="div" sx={{ display: 'block', flexWrap: 'wrap', m: 1}}>
            

            <div>
              <div style = {{textAlign: 'center'}}>
                  <img src={card.img} height={imageHeight} style={{borderStyle: "outset",}}/>
              </div>
              <div>
                <Typography sx = {{paddingTop: "10px", paddingBottom: "10px"}}>
                    Description: {card.desc}
                </Typography>
              </div>
              <div>
                <Typography>
                    Date added: {dayjs(card.date).toDate().toLocaleString()}
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
