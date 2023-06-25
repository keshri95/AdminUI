import React from "react";
import Row from "../Row/Row"
import "./index.scss";
import PropTypes from "prop-types";

const Table = ({
  rowsToDisplay,
  handleChecked,
  isCheck,
  handleCheckedMultiple,
  setFilterSearch,
  filterSearch,
  data,
  setData,
  handleEditRecord,
  addDeleteRecordHandler
}) => {


  const handleCheckedAll = (isChecked) => {
    if (isChecked) {
      handleCheckedMultiple(
        isCheck.length !== rowsToDisplay.length,
        rowsToDisplay.map((row) => row.id)
      );
    } else {
      handleCheckedMultiple(false, rowsToDisplay.map((row) => row.id));
    }
  };

  return (
      <React.Fragment>
        <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={isCheck.length === rowsToDisplay.length}
                  onChange={handleCheckedAll}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rowsToDisplay.length >=1 && rowsToDisplay?.map((item, id) => (
              <Row
                key={id}
                item={item}
                handleChecked={handleChecked}
                isCheck={isCheck}
                setFilterSearch={setFilterSearch}
                filterSearch={filterSearch}
                data={data}
                setData={setData}
                handleEditRecord={handleEditRecord}
                addDeleteRecordHandler={addDeleteRecordHandler}
              />
            ))
          }
          </tbody>
        </table>
        </React.Fragment>

  );
};


Table.propTypes = { 
  rowsToDisplay: PropTypes.array,
  handleChecked:PropTypes.func,
  isCheck: PropTypes.array,
  handleCheckedMultiple:PropTypes.func,
  setFilterSearch:PropTypes.func,
  filterSearch: PropTypes.array,
  data:PropTypes.array,
  setData: PropTypes.func,
  handleEditRecord: PropTypes.func,
  addDeleteRecordHandler: PropTypes.func
}

export default Table