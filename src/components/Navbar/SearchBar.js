const SearchBar = () => {
  return (
    <form className="search-bar">
      <label htmlFor="search"></label>
      <input type="text" name="search" placeholder="Search..." />
    </form>
  );
};

export default SearchBar;
