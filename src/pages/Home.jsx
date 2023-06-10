import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Table } from "../components/Table";
// import { adminRole } from "../utils/filterOption";

const Home = ({ data, setData, filterSearch, setFilterSearch }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  // check
  const [isCheck, setIsCheck] = useState([])

  const doEditUserData = (id) => {
    console.log(id);
  };

  // search user data --------
  const searchUsers = (searchValue) => {
    setQuery(searchValue);

    if (query !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilterSearch(filteredData);
    } else {
      setFilterSearch(data);
    }

    setPage(1);
  };

  // delete user row ----------
  const removeUserData = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    const updatedFilterSearch = filterSearch.filter((item) => item.id !== id);
    setData(updatedData);
    setFilterSearch(updatedFilterSearch);
  };

  // pagination ----------
  const hadlePagination = (selectPage) => {
    const totalPages = Math.ceil(filterSearch.length / 10);
    if (selectPage >= 1 && selectPage <= totalPages) {
      setPage(selectPage);
    }
  };

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const rowsToDisplay = filterSearch.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterSearch.length / 10);



  // checked 
  const handleChecked = (e) => {
    const {value, checked}  = e.target
    if(checked){
      setIsCheck([...isCheck, value])
    } else{
      setIsCheck(isCheck.filter((e) => e !== value))
    }

  }

  return (
    <div className="table">
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchUsers={searchUsers}
        data={data}
        filterSearch={filterSearch}
      />

      <Table 
        rowsToDisplay={rowsToDisplay}
        removeUserData={removeUserData}
        doEditUserData={doEditUserData}
        handleChecked={handleChecked}
        isCheck={isCheck}
      />

      <div>
        <button onClick={handleChecked}>Delete Selected</button>

        <button onClick={() => hadlePagination(1)}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button onClick={() => hadlePagination(page - 1)}>
          <AiOutlineArrowLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => hadlePagination(index + 1)}
            disabled={index + 1 === page}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => hadlePagination(page + 1)}>
          <AiOutlineArrowRight />
        </button>
        <button onClick={() => hadlePagination(totalPages)}>
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
