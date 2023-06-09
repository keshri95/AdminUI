import React from "react";

const SearchBar = ({data, searchUsers, query, setQuery }) => {

  const inputChangeHandler = (e) =>{
    searchUsers(e.target.value)
  }

  return (
    <React.Fragment>
      <input type="text" placeholder="Search by name, email or role" value={query} onChange={inputChangeHandler} />
    </React.Fragment>
  );

};

export default SearchBar;
