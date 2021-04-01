import Pagination from './Pagination';
import DisplayButtons from './DisplayButtons';
import { useProductContext } from '../productContext';
import PropTypes from 'prop-types';

const ResultOptions = ({ setVisible, visible }) => {
  const { sorting, setSorting } = useProductContext();

  const handleChange = (e) => {
    setSorting(e.target.value);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <section className="result-options">
      <DisplayButtons />
      <button className="toggle-filters" onClick={handleClick}>
        Filters
      </button>
      <Pagination />
      <form className="sorting-options">
        <label htmlFor="sort">Sort:</label>
        <select name="sort" value={sorting} onChange={handleChange}>
          <option value="?">Default</option>
          <option value="?_sort=price&_order=asc">Price Ascending</option>
          <option value="?_sort=price&_order=desc">Price Descending</option>
          <option value="?_sort=rating&_order=desc">Ratings</option>
        </select>
      </form>
    </section>
  );
};

export default ResultOptions;

ResultOptions.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
