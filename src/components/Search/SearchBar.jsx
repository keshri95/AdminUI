import React, {useEffect} from "react";
import PropTypes from "prop-types";
import "./index.scss"


const SearchBar = ({data, query, setQuery, setPage, setFilterSearch }) => {

  useEffect(() => {
    const results = data.filter((item) => {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilterSearch(results);
    setPage(1);
  }, [query, data, setFilterSearch, setPage]);
  /*

  const inputChangeHandler = (e) =>{
    addSearchRecordHandler(e.target.value)
  }

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
    */
  return (
    <React.Fragment>
      <input className="search-bar form-control my-2" type="text" placeholder="Search by name, email or role" value={query} onChange={(e) => setQuery(e.target.value)} />
    </React.Fragment>
  );

};

SearchBar.propTypes = { 
  data: PropTypes.array,
  searchUsers: PropTypes.func,
  query: PropTypes.string
}

export default SearchBar;
