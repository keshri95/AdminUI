import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./index.scss"
import { PropTypes } from "prop-types"

const Row = ({ item, handleChecked, isCheck, handleEditRecord, addDeleteRecordHandler }) => {
  
  const { id, name, email, role } = item;

    // edit single record in the table --------
    const addEditRecordHandler = () => {
      handleEditRecord(item);
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

        <button className="btn btn-success"  onClick={addEditRecordHandler}>
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


Row.propTypes = { 
  item: PropTypes.object,
  isCheck: PropTypes.array,
  handleEditRecord: PropTypes.func,
  addDeleteRecordHandler: PropTypes.func,
  handleChecked: PropTypes.func,
}

export default Row