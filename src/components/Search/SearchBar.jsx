import React, {useEffect} from "react";
import PropTypes from "prop-types";
import "./index.scss"


const SearchBar = ({data, query, setQuery, setPage, setFilterSearch }) => {

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilterSearch(filteredData);
    setPage(1);
  }, [query, data, setFilterSearch, setPage]);

  return (
    <React.Fragment>
      <input className="form-control my-2" type="text" placeholder="Search by name, email or role" value={query} onChange={(e) => setQuery(e.target.value)} />
    </React.Fragment>
  );

};

SearchBar.propTypes = { 
  data: PropTypes.array,
  searchUsers: PropTypes.func,
  query: PropTypes.string,
  setQuery:PropTypes.func,
  setPage: PropTypes.func,
  setFilterSearch:PropTypes.func,
}

export default SearchBar;
