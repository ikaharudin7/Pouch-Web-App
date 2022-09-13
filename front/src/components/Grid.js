import * as React from 'react';
import Grid from '@mui/material/Grid'
import MediaCard from './Media.js'
import SortBy from './Menus/SortBy.js';


export default function CollectionGrid({filteredCards}) {
    
    // const [asc, setAsc] = React.useState(false);
    // const [dsc, setDsc] = React.useState(false);
    
    // if (asc) {
    //     const cards = [...cards].sort((a, b) =>
    //         a.title > b.title ? 1 : -1,
    //     );
    // }
    
    // if (dsc) {
    //     const cards = [...cards].sort((a, b) =>
    //         a.title > b.title ? -1 : 1,
    //     );
    // }
    

    return (    
        <>
        {/* <SortBy prop={setAsc}/> */}
        <Grid container spacing = {4} sx = {{justifyContent: 'center'}}>
            {filteredCards.map((card) => (
                <Grid item key={card.id} >
                    <MediaCard prop = {card} />
                </Grid>
            ))}
        </Grid>
        </>

    )
}
