// Table.jsx
import Row from "./Row";

export const Table = ({
  rowsToDisplay,
  removeUserData,
  doEditUserData,
  handleChecked,
  isCheck,
  handleCheckedMultiple,
}) => {

  // check all the records -------
  const handleCheckedAll = (isChecked) => {
    if (isChecked) {
      const checkedRows = rowsToDisplay.map((row) => row.id);
      handleCheckedMultiple(true, checkedRows);
    } else {
      handleCheckedMultiple(false, []);
    }
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
            removeUserData={removeUserData}
            doEditUserData={doEditUserData}
            handleChecked={handleChecked}
            isCheck={isCheck}
          />
        ))}
      </tbody>
    </table>
  );
};
