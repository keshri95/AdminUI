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
    handleCheckedMultiple(isChecked, rowsToDisplay?.map((row) => row.id));
  };

  return (
    <div className="container">

    <div className="col-lg-12">
      <div className="table-responsive">
        <table className="table table-light table-hover table-sm">
          <thead>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  checked={isCheck.length === rowsToDisplay.length}
                  onChange={handleCheckedAll}
                />
              </th>
              <th scope="row">Name</th>
              <th scope="row">Email</th>
              <th scope="row">Role</th>
              <th scope="row">Actions</th>
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
                handleEditRecord={handleEditRecord}
                addDeleteRecordHandler={addDeleteRecordHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>

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