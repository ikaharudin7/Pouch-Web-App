import * as React from 'react';
import Grid from '@mui/material/Grid'
import PublicCard from './PublicGridCard.js';


export default function PublicCollectionGrid({filteredCards}) {
    
    return (    
        <>
        <Grid container spacing = {4} sx = {{justifyContent: 'center'}}>
            {filteredCards.map((card) => (
                <Grid item key={card._id} >
                    <PublicCard card = {card} />
                </Grid>
            ))}
        </Grid>
        </>

    )
}
