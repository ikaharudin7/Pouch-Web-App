import * as React from 'react';
import Grid from '@mui/material/Grid'
import MediaCard from './Media.js'
// import SortBy from './Menus/SortBy.js';


export default function CollectionGrid({filteredCards}) {
    
    return (    
        <>
        {/* <SortBy prop={setAsc}/> */}
        <Grid container spacing = {4} sx = {{justifyContent: 'center'}}>
            {filteredCards.map((card) => (
                <Grid item key={card.date} >
                    <MediaCard card = {card} />
                </Grid>
            ))}
        </Grid>
        </>

    )
}
