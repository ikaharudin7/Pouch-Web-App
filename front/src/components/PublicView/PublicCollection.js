import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import View from '../Menus/View';
import SortBy from '../Menus/SortBy';
import PublicSearchBar from './PublicSearchBar';
import PublicCollectionGrid from './PublicGrid';
import PublicCollectionList from './PublicList';


export default function PublicCollection({cards}) {

  const [filteredCards, setFilteredCards] = React.useState(cards);
  const [view, setView] = React.useState(false);
  

  return (
    <>
    <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px'}}>
      
      <PublicSearchBar cards = {cards} setFilteredCards = {setFilteredCards} />

      <div className = 'text-box'><Typography>showing {cards.length} cards</Typography>
              
      <div className='flex-box'>
          <View setView = {setView} />
          <SortBy cards = {filteredCards} setFilteredCards = {setFilteredCards}/>
        </div>
      </div>


      {!view && <PublicCollectionGrid filteredCards={filteredCards}/>}
      {view && <PublicCollectionList filteredCards={filteredCards}/>}

    </Box>
    
    </>
  );
}
