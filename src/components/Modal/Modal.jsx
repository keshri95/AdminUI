import { useState } from "react";

const Modal = ({ isModalOpen, closeModalHandler, editedRecord, setEditedRecord }) => {
  const [name, setName] = useState(editedRecord ? editedRecord.name : "");
  const [email, setEmail] = useState(editedRecord ? editedRecord.email : "");
  const [phone, setPhone] = useState(editedRecord ? editedRecord.phone : "");
  const [website, setWebsite] = useState(editedRecord ? editedRecord.website : "");

  const handleSave = () => {
    if (editedRecord) {
      const updatedData = editedRecord.map((item) => {
        if (item.id === editedRecord.id) {
          return {
            ...item,
            name,
            email,
            phone,
            website,
          };
        }
        return item;
      });
      setEditedRecord(updatedData);
    }
    closeModalHandler();
  };

  return (
    <div className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Edit Record</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={closeModalHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;