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





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));



export default function SearchAppBar({cards, setFilteredCards}) {


  const [searchField, setSearchField] = useState("");
  
  const filteredCards = cards.filter(
    cards => {
        return (
        cards
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase())
        );
    }
    );

  const filteredCardsString = JSON.stringify(filteredCards);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  
  React.useEffect(() => {
      
    setFilteredCards(JSON.parse(filteredCardsString))
      
  }, [filteredCardsString, setFilteredCards])
    
  

    return (
        <>
            <AppBar position="static" sx ={{backgroundColor: 'black', borderRadius: 2}}>
                <Toolbar>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange = {handleChange}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                    
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <AddItem />
                </Box>
                </Toolbar>
            </AppBar>

          </>
    )}

