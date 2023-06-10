// Home.jsx
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Table } from "../components/Table";

const Home = ({ data, setData, filterSearch, setFilterSearch }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isCheck, setIsCheck] = useState([]);

  const doEditUserData = (id) => {
    console.log(id);
  };
  

  // search the records in the table ---------
  const searchUsers = (searchValue) => {
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
  
  // remove single records ----------
  const removeUserData = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    const updatedFilterSearch = filterSearch.filter((item) => item.id !== id);
    setData(updatedData);
    setFilterSearch(updatedFilterSearch);
  };

  // pagination show next and prev records -------
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



  // check one records  ------ 
  const handleChecked = (id, checked) => {

    if (checked) {
      setIsCheck((prevSelectedRows) => [...prevSelectedRows, id]);
    } else {
      setIsCheck((prevSelectedRows) =>
        prevSelectedRows.filter((row) => row !== id)
      );
    }
  };

  // multiple records selects --------
  const handleCheckedMultiple = (isChecked, rowIds) => {
    if (isChecked) {
      setIsCheck((prevSelectedRows) => [...prevSelectedRows, ...rowIds]);
    } else {
      setIsCheck((prevSelectedRows) =>
        prevSelectedRows.filter((row) => !rowIds.includes(row))
      );
    }
  };
  
  // delete selected records ---------
  const deleteSelectedRows = () => {
    const updatedRows = data.filter((item) => !isCheck.includes(item.id));
    const updatedFilterSearch = filterSearch.filter(
      (item) => !isCheck.includes(item.id)
    );
    setData(updatedRows);
    setFilterSearch(updatedFilterSearch);
    setIsCheck([]);
  };

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
        handleCheckedMultiple={handleCheckedMultiple}
      />

      <div>
        <button onClick={deleteSelectedRows} disabled={isCheck.length === 0}>
          Delete Selected
        </button>

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
