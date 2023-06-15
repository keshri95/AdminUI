import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./index.scss"
import { useState } from "react";
import Modal from "../Modal/Modal";

const Row = ({ item, handleChecked, isCheck, setFilterSearch, filterSearch, data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedRecord, setEditedRecord] = useState(null);
  
  const { id, name, email, role } = item;

  // remove single records ----------
  const addDeleteRecordHandler = (id) => {
    const updatedFilterSearch = filterSearch.filter((item) => item.id !== id);
    setFilterSearch(updatedFilterSearch);
  };


    // edit single record in the table --------
    const addEditRecordHandler = (item) => {
      setIsModalOpen(true);
      setEditedRecord(item);
    };
    

    

    const updateRecord = (updatedRecord) => {
      const updatedData = data.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      );
      setData(updatedData);
      closeModal();
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
      <div className="btn-group" role="group">

        <button className="btn btn-success" onClick={() => addEditRecordHandler(item)}>
          <BiEdit/>
        </button>
        {
          isModalOpen && (
            <Modal 
              record={editedRecord}
              closeModal={closeModal}
              updateRecord={updateRecord}
            />
            )
          }
        <button className="btn btn-danger" onClick={() => addDeleteRecordHandler(id)}>
          <AiOutlineDelete />
        </button>
          </div>
      </td>
    </tr>
  );
};



export default Row;
