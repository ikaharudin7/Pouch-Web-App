import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      autoFocus
      id="combo-box-demo"
      options={pokemonCards}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Card" />}
    />
  );
}


const pokemonCards = [
  { label: 'Charizard', year: 1994 },
  { label: 'Pikachu', year: 1972 },
  { label: 'Bulbasaur', year: 1974 },
  { label: 'Ivysaur', year: 2008 },
  { label: 'Venasaur', year: 1957 },
  { label: "Charmander", year: 1993 },
  { label: 'Charmeleon', year: 1994 },
  { label: 'Squirtle', year: 1994 },
  { label: 'Wartortle', year: 1994 },
  { label: 'Blastoise', year: 1994 },
];
