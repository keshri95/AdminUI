import Row from "./Row";

export const Table = ({
  rowsToDisplay,
  removeUserData,
  doEditUserData,
  handleChecked,
  isCheck,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
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
