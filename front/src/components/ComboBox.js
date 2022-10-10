import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({item, setItem}) {
  return (
    <Autocomplete
      autoFocus
      id="combo-box-demo"
      options={pokemonCards}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} required label="Card" sx = {{marginTop: 1}}/>}
      onChange = {e => setItem({...item, name: e.target.textContent})}
    />
  );
}


const pokemonCards = [
  { label: 'Charizard'},
  { label: 'Pikachu'},
  { label: 'Bulbasaur'},
  { label: 'Ivysaur'},
  { label: 'Venasaur'},
  { label: "Charmander"},
  { label: 'Charmeleon'},
  { label: 'Squirtle'},
  { label: 'Wartortle'},
  { label: 'Blastoise'},
];
