import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./index.scss"
// import { useState } from "react";
// import Modal from "../Modal/Modal";
// import { PropTypes } from "prop-types"

const Row = ({ item, handleChecked, isCheck, setFilterSearch, filterSearch, data, setData }) => {

  
  const { id, name, email, role } = item;

  // remove single records ----------
  const addDeleteRecordHandler = (id) => {
    const updatedFilterSearch = filterSearch.filter((item) => item.id !== id);
    setFilterSearch(updatedFilterSearch);
  };


    // edit single record in the table --------
    const addEditRecordHandler = (item) => {
      console.log(item)
    };
    

    

    const updateRecord = (updatedRecord) => {
      const updatedData = data.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      );
      setData(updatedData);
      // closeModal();
    };
    


  return (
    <tr key={id}>
      <td>
        <input
          type="checkbox"
          checked={isCheck.includes(id)}
          onChange={(e) => handleChecked(id, e.target.checked)}
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
      <div className="btn-group-sm" role="group">

        <button className="btn btn-success" onClick={() => addEditRecordHandler(item)}>
          <BiEdit/>
        </button>
        <button className="btn btn-danger" onClick={() => addDeleteRecordHandler(id)}>
          <AiOutlineDelete />
        </button>
          </div>
      </td>
    </tr>
  );
};


// Row.propTypes = { 
//   item: PropTypes
//   handleChecked:PropTypes
//    isCheck: propTypes
//    setFilterSearch:PropTypes
//    filterSearch: propTypes
//     data:PropTypes
//    setData: propTypes
// }



export default Row;
