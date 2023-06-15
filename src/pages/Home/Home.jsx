import SearchBar from "../../components/Search/SearchBar";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Table } from "../../components/Table/Table";
// import {adminRole} from "../utils/filterOption"
import "./index.scss"


const Home = ({ data, setData, filterSearch, setFilterSearch}) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isCheck, setIsCheck] = useState([]);
  
  
 

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
    <div className="container">
      <SearchBar
        query={query}
        setQuery={setQuery}
        data={data}
        setFilterSearch={setFilterSearch}
        setPage={setPage}
      />

      <Table
        rowsToDisplay={rowsToDisplay}
        handleChecked={handleChecked}
        isCheck={isCheck}
        handleCheckedMultiple={handleCheckedMultiple}
        setFilterSearch={setFilterSearch}
        filterSearch={filterSearch}
        data={data}
        setData={setData}
      />

      <div className="btn btn-group">
        <button className="btn btn-danger" onClick={deleteSelectedRows} disabled={isCheck.length === 0}>
          Delete Selected
        </button>


        <button className="btn btn-primary" onClick={() => hadlePagination(1)}>
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button className="btn btn-primary" onClick={() => hadlePagination(page - 1)}>
          <AiOutlineArrowLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
          className="btn btn-primary"
            key={index}
            onClick={() => hadlePagination(index + 1)}
            disabled={index + 1 === page}
          >
            {index + 1}
          </button>
        ))}

        <button className="btn btn-primary" onClick={() => hadlePagination(page + 1)}>
          <AiOutlineArrowRight />
        </button>
        <button className="btn btn-primary" onClick={() => hadlePagination(totalPages)}>
          <MdKeyboardDoubleArrowRight />
        </button>

      </div>

    </div>
  );
};



export default Home;
