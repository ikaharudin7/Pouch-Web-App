import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import View from './Menus/View';
import SortBy from './Menus/SortBy';
import AddItem from './AddItem';
import CollectionGrid from './Grid';
import SearchAppBar from './SearchBar2';
import cards from '../test/items';



export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
// 

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const [filteredCards, setFilteredCards] = React.useState(cards);


  function searchList() {
    return (
        <CollectionGrid filteredCards={filteredCards}/>
    );
  }
  return (
    <>
    <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px'}}>
      
      <SearchAppBar detail = {cards} setFilteredCards = {setFilteredCards} />

      {/* /* Make this dynamic or replace with progress bar? */}
      <div className = 'text-box'><Typography>showing 1 - 8</Typography>
              
        <div className='flex-box'>
          <View />
          <SortBy cards = {filteredCards} setFilteredCards = {setFilteredCards}/>
        </div>
      </div>


      {searchList()}

    </Box>
    
    </>
  );
}
