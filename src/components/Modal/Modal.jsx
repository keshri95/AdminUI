import { useState } from "react";
import "./index.scss";
import { PropTypes } from "prop-types"

const Modal = ({
  data,
  setData,
  isModalOpen,
  closeModalHandler,
  editedRecord,
  setEditedRecord,
}) => {
  const [name, setName] = useState(editedRecord ? editedRecord.name : "");
  const [email, setEmail] = useState(editedRecord ? editedRecord.email : "");
  const [role, setRole] = useState(editedRecord ? editedRecord.role : "");

  const handleSave = () => {
    // Create a new record object with the updated values
    const updatedRecord = {
      ...editedRecord,
      name: name,
      email: email,
      role: role,
    };

    // Find the index of the edited record in the data array
    const indexPos = data.findIndex((item) => item.id === editedRecord.id);


    // Create a new data array with the updated record at the correct index
    const updatedData = [...data];
    updatedData[indexPos] = updatedRecord;

    // Update the data state with the updated data array
    setData(updatedData);

    // Clear the edited record and close the modal
    setEditedRecord(null);
    closeModalHandler();
  };

  return (
    <div className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <h3 className="text-center">
            <small className="text-body-secondary">Edit Record </small>
          </h3>
          <form className="container">
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Role
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </form>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={closeModalHandler}
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


Modal.propTypes = { 
  data: PropTypes.array,
  setData: PropTypes.func,
  // isModalOpen: PropTypes.boolean,
  closeModalHandler: PropTypes.func,
  // editedRecord: PropTypes.isRequired,
  setEditedRecord:PropTypes.func,
}


export default Modal;
