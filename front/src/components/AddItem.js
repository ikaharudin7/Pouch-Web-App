import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import UploadButton from './UploadButton';
import dayjs from 'dayjs';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import axios from 'axios';

global.userid = "";

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState({img: null});
  const [userid, setUserid] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    // if (reason !== 'backdropClick') {
      setOpen(false);
  };


  React.useEffect(() => {
    axios.get("http://localhost:8080/login", { withCredentials: true})
    .then((response) => {       
      setUserid(response.data.user._id)
      console.log(userid)
  })    
  }, [userid]);


  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    
    fetch("http://localhost:8080/collections/collection_test", {
        method: "POST",
        headers: { "Content-Type": "application/json", "id": userid },
        body: JSON.stringify(item),
      })
      .then((res)=> res.json())
      .then(()=> {
        console.log(item);
        console.log(JSON.stringify(item));
        console.log("POST sent");
      })

    window.location.href="http://localhost:3000/collection-page";
  }; 

  return (
    <div>
      <Button onClick={handleClickOpen} sx = {{width: 'max-content', display: {xs: "none", sm: "inline-flex"}}}>
        <AddIcon/>
        <Typography sx = {{fontWeight: 'bold'}}>
          Add New Item
        </Typography>
      </Button>
      <Button onClick={handleClickOpen} sx = {{width: 'max-content', display: {xs: "inline-flex", sm: "none"}}}>
        <AddIcon/>
      </Button>
      <Dialog 
        disableEscapeKeyDown 
        open={open} 
        onClose={handleClose} 
        fullWidth 
      >
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          
          <Box component="form" sx={{ display: 'block', flexWrap: 'wrap', m: 1}} id = "addItem" onSubmit={handleSubmit}>
            

            <div>
              <div style = {{textAlign: 'center'}}>
                  <UploadButton item = {item} setItem = {setItem}/>
              </div>
              <div>
                {/* <ComboBox item = {item} setItem = {setItem}/> */}
                <TextField
                  autoFocus
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  margin='normal'
                  onChange = {e => setItem({...item, name: e.target.value})}
                />
                <TextField
                  multiline
                  autoFocus
                  fullWidth
                  id="desc"
                  label="Description"
                  margin='normal'
                  onChange = {e => setItem({...item, desc: e.target.value})}
                />
              </div>
              
            </div>
            

            {/* get so can't press ok if name is empty */}
            
            
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => {handleClose(); setItem({img: null})}}>Cancel
            
          </Button>

          <Button onClick={() => {setItem({...item, date: dayjs().format()})}} type = "submit" form = "addItem" >
            Ok
            {/* <input hidden type="submit" form="addItem" value="item" className="btn" /> */}
            
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
