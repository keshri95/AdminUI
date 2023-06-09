import Row from "../components/Row";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
// import { adminRole } from "../utils/filterOption";


const Home = ({ data, setData, filterSearch, setFilterSearch }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1)


  const doEditUserData = (id) => {
    console.log(id)
  }



    // search user data --------
    const searchUsers = (searchValue) => {
      setQuery(searchValue);
    
      if (query !== '') {
        const filteredData = data.filter((item) => {
          return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(query.toLowerCase())
          );
        });
        setFilterSearch(filteredData);
      } else {
        setFilterSearch(data);
      }
    };



    // delete user row ----------
    const removeUserData = (id) => {
      const updatedData = data.filter((item) => item.id !== id);
      const updatedFilterSearch = filterSearch.filter((item) => item.id !== id);
      setData(updatedData);
      setFilterSearch(updatedFilterSearch);
    };
    

    // pagination ----------
    const hadlePagination = (selectPage) => {
      if(selectPage >= 1 && selectPage !== page && selectPage <= data.length / 10){
        setPage(selectPage)
      }
      
    }


  

  return (
    <div className="table">
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        searchUsers={searchUsers}
        data={data}
        filterSearch={filterSearch}
      />

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

          {
            query.length > 1 ? (
              filterSearch?.map((item, id) => (
                <Row key={id} item={item} removeUserData={removeUserData} doEditUserData={doEditUserData} />
              ))
            ): (

              data?.map((item, id) => (
                <Row key={id} item={item} removeUserData={removeUserData} doEditUserData={doEditUserData} />
                ))
              )
              }
          
        </tbody>
      </table>
      <div>
        <button>Delete Selected</button>
        <button onClick={() => hadlePagination(page-1) }>Prev</button>
        {/* {
          [...Array(data.length / 2)].map((item, id) =>  (
              <button key={id} onClick={() => hadlePagination(id+1)} >{id+1}</button>
            )
          )
        } */}
        <button onClick={() => hadlePagination(page+1) }>Next</button>
      </div>
     

          
    </div>
  );
};

export default Home;
