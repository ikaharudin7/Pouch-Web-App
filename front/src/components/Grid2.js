import * as React from 'react';
import Grid from '@mui/material/Grid'
import MediaCard2 from './Card2.js';


export default function CollectionGrid2({filteredCards}) {
    
    return (    
        <>
        <Grid container spacing = {4} sx = {{justifyContent: 'center'}}>
            {filteredCards.map((card) => (
                <Grid item key={card.date} >
                    <MediaCard2 card = {card} />
                </Grid>
            ))}
        </Grid>
        </>

    )
}
