import Row from "../Row/Row";
import "./index.scss";
// import PropTypes from "prop-types";

const Table = ({
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
  // const handleCheckedAll = (isChecked) => {
  //   const rowIds = rowsToDisplay.map((row) => row.id);
  //   handleCheckedMultiple(isChecked, rowIds);
  // };

  return (
    <div className="col-lg-12">
      <div className="table-responsive">
        <table className="table table-light table-hover table-sm">
          <thead>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  checked={isCheck.length === rowsToDisplay.length}
                  // onChange={(e) => handleCheckedAll(e.target.checked)}
                  onChange={(e) =>
                    handleCheckedMultiple(
                      e.target.checked,
                      rowsToDisplay.map((row) => row.id)
                    )
                  }
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// Table.propTypes = { 
//   data: PropTypes.array,
//   rowsToDisplay: PropTypes.array,
//   // setData: PropTypes.func,
//   filterSearch: PropTypes.array,
//   // handleChecked: PropTypes.
//   // handleCheckedMultiple:PropTypes.array,
//   // setFilterSearch: PropTypes.func,
//   // isCheck: PropTypes.bool
// }

export default Table