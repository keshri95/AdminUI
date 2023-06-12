import Row from "../Row/Row";
import "./index.css"


export const Table = ({
  rowsToDisplay,
  handleChecked,
  isCheck,
  handleCheckedMultiple,
  setFilterSearch,
  filterSearch,
  data,
  setData
}) => {

  // check all the records -------
  const handleCheckedAll = (isChecked) => {
    const rowIds = rowsToDisplay.map((row) => row.id)
    handleCheckedMultiple(isChecked, rowIds)
 
  };



  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={isCheck.length === rowsToDisplay.length}
              onChange={(e) => handleCheckedAll(e.target.checked)}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
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
  );
};

