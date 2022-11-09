import * as React from 'react';
import Grid from '@mui/material/Grid'
import PrivateGridCard from './PrivateGridCard.js'


export default function PrivateCollectionGrid({filteredCards}) {
    
    return (    
        <>
        <Grid container spacing = {4} sx = {{justifyContent: 'center'}}>
            {filteredCards.map((card) => (
                <Grid item key={card._id} >
                    <PrivateGridCard card = {card} />
                </Grid>
            ))}
        </Grid>
        </>

    )
}
