import { useProductContext } from './productContext';
import { useRef } from 'react';

const SearchBar = () => {
  const { setSearchQuery } = useProductContext();

  const searchValue = useRef('');

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearchQuery(`q=${searchValue.current.value}`);
  };

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        ref={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
