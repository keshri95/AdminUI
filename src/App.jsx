import { useEffect, useState } from "react";
import Home from "./pages/Home/Home"
import { fetchFromAPI } from "./utils/fetchFromAPI";
import Modal from "./components/Modal/Modal";

function App() {
  const [data, setData] = useState([]);
  const [filterSearch, setFilterSearch]= useState([])   
  

  const [editedRecord, setEditedRecord] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    fetchFromAPI()
      .then((data) => {
        setData(data);
        setFilterSearch(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addDeleteRecordHandler = (id) => {
    // Filter out the record with the specified id
      const updatedData = data.filter((record) => record.id !== id);

      // Update the data state with the filtered data array
      setData(updatedData);

      // If the deleted record is the edited record, clear the edited record
      if (editedRecord && editedRecord.id === id) {
        setEditedRecord(null);
      }
  };

  const openModalHandler = (record) => {
    setEditedRecord(record);
    setIsModalOpen(true);

  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Home
        data={data}
        setData={setData}
        filterSearch={filterSearch} 
        setFilterSearch={setFilterSearch}
        openModalHandler={openModalHandler}
        addDeleteRecordHandler={addDeleteRecordHandler}
      />

      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          closeModalHandler={closeModalHandler}
          editedRecord={editedRecord}
          setEditedRecord={setEditedRecord}
          data={data}
          setData={setData}
        />
      )}
    </div>
  )
}

export default App
