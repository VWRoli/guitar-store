import { connect } from 'react-redux';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { setSearchQuery } from '../../actions/productActions';

const SearchBar = ({ setSearchQuery }) => {
  const searchValue = useRef('');

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {
    setSearchQuery(`&q=${searchValue.current.value}`);
  };

  return (
    <form className='search-bar' onSubmit={onSubmit}>
      <label htmlFor='search'></label>
      <input
        type='text'
        name='search'
        placeholder='Search...'
        ref={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default connect(null, { setSearchQuery })(SearchBar);

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func,
};
