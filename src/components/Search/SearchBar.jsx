import React from "react";
import PropTypes from "prop-types";
import "./index.css"


const SearchBar = ({data, query, setQuery,setFilterSearch, setPage }) => {

  const inputChangeHandler = (e) =>{
    addSearchRecordHandler(e.target.value)
  }

    // search the records in the table ---------
    const addSearchRecordHandler = (searchValue) => {
      setQuery(searchValue);
  
      if (searchValue !== "") {
        const filteredData = data.filter((item) => {
          return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchValue.toLowerCase())
          );
        });
        setFilterSearch(filteredData);
      } else {
        setFilterSearch(data);
      }
  
      setPage(1);
    };

  return (
    <React.Fragment>
      <input type="text" placeholder="Search by name, email or role" value={query} onChange={inputChangeHandler} />
    </React.Fragment>
  );

};

SearchBar.propTypes = {
  data: PropTypes.array,
  searchUsers: PropTypes.func,
  query: PropTypes.string
}

export default SearchBar;
