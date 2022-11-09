import * as React from 'react';
import Grid from '@mui/material/Grid'
import UserListCard from './UserListCard.js';

export default function UserList({filteredCards}) {
    
    return (    
        <>
            {filteredCards.map((card) => (
                <Grid item key={card._id} sx = {{paddingBottom: "15px"}} >
                    <UserListCard card = {card} />
                </Grid>
            ))}

        </>

    )
}
