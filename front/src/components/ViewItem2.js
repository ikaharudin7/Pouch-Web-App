import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';


export default function ViewItem2({card, handleClose, handleEditOpen}) {

  return (
    <>
        <DialogTitle>{card.name}</DialogTitle>
        <DialogContent>
          
          <Box component="div" sx={{ display: 'block', flexWrap: 'wrap', m: 1}}>
            

            <div>
              <div style = {{textAlign: 'center'}}>
                  <img src={card.img} height="200px" />
              </div>
              <div>
                <Typography>
                    Description: {card.desc}
                </Typography>
              </div>
              <div>
                <Typography>
                    Date added: {card.date}
                </Typography>
              </div>
              
            </div>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
    </>
  );
}
