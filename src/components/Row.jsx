// Row.jsx
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Row = ({ item, doEditUserData, removeUserData, handleChecked, isCheck }) => {
  const { id, name, email, role } = item;

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
        <button onClick={() => doEditUserData(id)}>
          <BiEdit color="gray" />
        </button>
        <button onClick={() => removeUserData(id)}>
          <AiOutlineDelete color="red" />
        </button>
      </td>
    </tr>
  );
};

export default Row;
