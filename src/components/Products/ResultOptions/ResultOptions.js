import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSorting } from '../../../actions/productActions';
//Components
import Pagination from './Pagination';
import DisplayButtons from './DisplayButtons';

const mapStateToProps = (state) => ({
  sorting: state.products.sorting,
});

const ResultOptions = ({ setVisible, visible, sorting, setSorting }) => {
  const handleChange = (e) => {
    setSorting(e.target.value);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <section className='result-options'>
      <DisplayButtons />
      <button className='toggle-filters' onClick={handleClick}>
        Filters
      </button>
      <Pagination />
      <form className='sorting-options'>
        <label htmlFor='sort'>Sort:</label>
        <select name='sort' value={sorting} onChange={handleChange}>
          <option value='?'>Default</option>
          <option value='?_sort=price&_order=asc'>Price Ascending</option>
          <option value='?_sort=price&_order=desc'>Price Descending</option>
          <option value='?_sort=rating&_order=desc'>Ratings</option>
        </select>
      </form>
    </section>
  );
};

export default connect(mapStateToProps, { setSorting })(ResultOptions);

ResultOptions.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
