import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import View from './Menus/View';
import SortBy from './Menus/SortBy';
import CollectionGrid from './Grid';
import SearchBar from './SearchBar';



export default function Collection({cards}) {

  const [filteredCards, setFilteredCards] = React.useState(cards);


  return (
    <>
    <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px'}}>
      
      <SearchBar cards = {cards} setFilteredCards = {setFilteredCards} />

      <div className = 'text-box'><Typography>showing {cards.length} cards</Typography>
              
        <div className='flex-box'>
          <View />
          <SortBy cards = {filteredCards} setFilteredCards = {setFilteredCards}/>
        </div>
      </div>


      <CollectionGrid filteredCards={filteredCards}/>

    </Box>
    
    </>
  );
}
