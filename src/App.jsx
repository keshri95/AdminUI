import { useEffect, useState } from "react";
import Home from "./pages/Home/Home"
import { fetchFromAPI } from "./utils/fetchFromAPI";
// import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [filterSearch, setFilterSearch]= useState([])
  

  // modal
  /*
  const [modalOpen, setModalOpen] = useState(false)
  const handleSubmit = (newRow) => {
    setData([...data,newRow])
  }
  */


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

  return (
    <div>
      <Home
        data={data}
        setData={setData}
        filterSearch={filterSearch} 
        setFilterSearch={setFilterSearch}
      />

      {/* Modal */}
      {/* <button onClick={() => setModalOpen(true)}>Add</button>
       {modalOpen && (
       <Modal 
        closeModal={() => { 
          setModalOpen(false)
          }}
          onSubmit={handleSubmit}
        />
      )} */}
    </div>
  )
}

export default App
