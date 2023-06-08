
const SearchBar = ({data, searchUsers, query, setQuery }) => {

  const onSubmitFn = (e)=>{
    e.preventDefault()
    searchUsers(data)
  } 


 

  return (
    <>
    <form onSubmit={onSubmitFn}>
      <input type="search" placeholder="Search by name, email or role" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
    </>
  );
};

export default SearchBar;
