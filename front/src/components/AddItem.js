import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import ComboBox from './ComboBox';
import TextField from '@mui/material/TextField';
import Date from './Date';
import UploadButton from './UploadButton';
// import { stepClasses } from '@mui/material';


export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    // if (reason !== 'backdropClick') {
      setOpen(false);
    
    
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx = {{width: 'max-content'}}>+ Add New Item</Button>
      <Dialog 
        disableEscapeKeyDown 
        open={open} 
        onClose={handleClose} 
        fullWidth 
      >
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          
          <Box component="form" sx={{ display: 'block', flexWrap: 'wrap', m: 1}}>
            
            <div>
              <div style = {{display: 'inline', float: 'left'}}>
                <ComboBox />

                <Date />
                
              </div>
              <div style = {{display: 'flex', float: 'right'}}><UploadButton /></div>
            </div>
            

            {/* get so can't press ok if name is empty */}
            

            <TextField
                multiline
                autoFocus
                fullWidth
                id="name"
                label="Description"
                margin='normal'
            />

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
