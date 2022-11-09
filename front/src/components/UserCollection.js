import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserSort from './Menus/UserSort';
import SearchBar2 from './PublicView/PublicSearchBar';
import UserList from './UserList'


export default function UserCollection({users}) {

  const [filteredUsers, setFilteredUsers] = React.useState(users);

  return (
    <>
    <Box sx={{ flexGrow: 1, paddingLeft: '40px', paddingRight: '40px'}}>
      
      <SearchBar2 cards = {users} setFilteredCards = {setFilteredUsers} />

      <div className = 'text-box'><Typography>showing {users.length} users</Typography>
              
        <div className='flex-box'>
          <UserSort cards = {filteredUsers} setFilteredCards = {setFilteredUsers}/>
        </div>
      </div>
      
      {<UserList filteredCards={filteredUsers}/>}

    </Box>
    
    </>
  );
}
