import Grid from '@mui/material/Grid'
import MediaCard from './Media.js'
import cards from '../test/items.js'


export default function CollectionGrid() {

    return (    
        <Grid container spacing = {4} sx = {{justifyContent: 'center'}}>
            {cards.map((card) => (
                <Grid item key={card.id} >
                    <MediaCard prop = {card} />
                </Grid>
            ))}
        </Grid>
        
    )
}
