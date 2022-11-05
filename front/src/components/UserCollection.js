import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SortBy from './Menus/SortBy';
import SearchBar2 from './SearchBar2';
import CollectionList2 from './List2';


export default function UserCollection({users}) {

  const [filteredUsers, setFilteredUsers] = React.useState(users);

  return (
    <>
    <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px'}}>
      
      <SearchBar2 cards = {users} setFilteredCards = {setFilteredUsers} />

      <div className = 'text-box'><Typography>showing {users.length} users</Typography>
              
      <div className='flex-box'>
          <SortBy cards = {filteredUsers} setFilteredCards = {setFilteredUsers}/>
        </div>
      </div>
      {/* Change list so it shows username, bio?, and profile pic */}
      {<CollectionList2 filteredCards={filteredUsers}/>}

    </Box>
    
    </>
  );
}
