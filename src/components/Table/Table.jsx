import Row from "../Row/Row";
import "./index.scss"
import { adminRole } from "../../utils/filterOption";
import { useEffect } from "react";
import Modal from "../Modal/Modal";

export const Table = ({
  rowsToDisplay,
  handleChecked,
  isCheck,
  handleCheckedMultiple,
  setFilterSearch,
  filterSearch,
  data,
  setData,
}) => {

  // check all the records -------
  const handleCheckedAll = (isChecked) => {
    const rowIds = rowsToDisplay.map((row) => row.id)
    handleCheckedMultiple(isChecked, rowIds)
 
  };



  return (
    <div className="table-responsive">
    <table className="table table-light table-hover">
      <thead>
        <tr>
          <th scope="col">
            <input
              type="checkbox"
              checked={isCheck.length === rowsToDisplay.length}
              // onChange={(e) => handleCheckedAll(e.target.checked)}
              onChange={(e) =>
                handleCheckedMultiple(e.target.checked, rowsToDisplay.map((row) => row.id))
              }
            />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>    
        </tr>
      </thead>
      <tbody>
        {rowsToDisplay?.map((item, id) => (
          <Row
            key={id}
            item={item}
            handleChecked={handleChecked}
            isCheck={isCheck}
            setFilterSearch={setFilterSearch}
            filterSearch={filterSearch}
            data={data}
            setData={setData}
          />
        ))}
      </tbody>
    </table>
    </div>
  );
};

