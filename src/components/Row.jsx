import {BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"
// import Checkbox from "./Checkbox";


const Row = ({ item, doEditUserData, removeUserData }) => {
  const { id, name, email, role } = item

  
  return (
      <tr key={id}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>
          <button onClick={() =>doEditUserData(id)}>
            <BiEdit color="gray" />
          </button>
          <button onClick={() =>removeUserData(id)}>
            <AiOutlineDelete color="red" />
          </button>
        </td>
      </tr>
  );
};






export default Row;
