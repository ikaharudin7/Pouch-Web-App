import React, { useState } from 'react';
import CollectionGrid from './Grid';
// import SearchList from './SearchList';


function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredCards = details.filter(
    cards => {
      return (
        cards
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  console.log(filteredCards)

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      
        <CollectionGrid filteredCards={filteredCards}/>
      
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;