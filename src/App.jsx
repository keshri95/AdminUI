import { useEffect, useState } from "react";
import Home from "./pages/Home/Home"
import { fetchFromAPI } from "./utils/fetchFromAPI";

function App() {
  const [data, setData] = useState([]);
  const [filterSearch, setFilterSearch]= useState([])   
  

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
    <div className="container">
      <Home
        data={data}
        setData={setData}
        filterSearch={filterSearch} 
        setFilterSearch={setFilterSearch}
      />
    </div>
  )
}

export default App
