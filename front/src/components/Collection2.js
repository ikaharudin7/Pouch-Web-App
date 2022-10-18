import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import View from './Menus/View';
import SortBy from './Menus/SortBy';
import SearchBar2 from './SearchBar2';
import CollectionGrid2 from './Grid2';
import CollectionList2 from './List2';


export default function Collection2({cards}) {

  const [filteredCards, setFilteredCards] = React.useState(cards);
  const [view, setView] = React.useState(false);
  

  return (
    <>
    <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px'}}>
      
      <SearchBar2 cards = {cards} setFilteredCards = {setFilteredCards} />

      <div className = 'text-box'><Typography>showing {cards.length} cards</Typography>
              
      <div className='flex-box'>
          <View setView = {setView} />
          <SortBy cards = {filteredCards} setFilteredCards = {setFilteredCards}/>
        </div>
      </div>


      {!view && <CollectionGrid2 filteredCards={filteredCards}/>}
      {view && <CollectionList2 filteredCards={filteredCards}/>}

    </Box>
    
    </>
  );
}
