import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));



export default function PublicSearchBar({cards, setFilteredCards}) {


  const [searchField, setSearchField] = useState("");
  
  const filteredCards = cards.filter(
    cards => {
        return (
          (cards.name && cards.name.toLowerCase().includes(searchField.toLowerCase())) ||
          (cards.username && cards.username.toLowerCase().includes(searchField.toLowerCase())) |
          (cards.desc && cards.desc.toLowerCase().includes(searchField.toLowerCase()))
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
                </Toolbar>
            </AppBar>

          </>
    )}

