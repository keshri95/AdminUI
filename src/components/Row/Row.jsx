import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./index.css"

const Row = ({ item, handleChecked, isCheck, setFilterSearch, filterSearch,data, setData }) => {
  const { id, name, email, role } = item;

  // remove single records ----------
  const addDeleteRecordHandler = (id) => {
    // const updatedData = data.filter((item) => item.id !== id);
    const updatedFilterSearch = filterSearch.filter((item) => item.id !== id);
    // setData(updatedData);
    setFilterSearch(updatedFilterSearch);
  };


    // edit single record in the table --------
    const addEditRecordHandler = (id) => {
     
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
        <button onClick={() => addEditRecordHandler(id)}>
          <BiEdit color="gray" />
        </button>
        <button onClick={() => addDeleteRecordHandler(id)}>
          <AiOutlineDelete color="red" />
        </button>
      </td>
    </tr>
  );
};



export default Row;
