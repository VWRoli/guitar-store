import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage, setFilters } from '../../../actions/productActions';
//Components
import Checkbox from './Checkbox';

const mapStateToProps = (state) => ({
  filter: state.products.filter,
});

const FilterGroup = ({ items, name, setFilters, filter, setPage }) => {
  const handleChange = (name, item) => {
    const clickedItem = `&${name.toLowerCase()}=${item}`;

    const checkIfExists = filter.some((el) => el === clickedItem);

    if (checkIfExists) {
      const removedFilters = filter.filter(
        (filterItem) => filterItem !== clickedItem
      );
      setFilters(removedFilters);
    } else {
      setFilters([...filter, clickedItem]);
    }
    setPage(1);
  };

  return (
    <>
      <h3>{name}:</h3>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <label htmlFor={item} onChange={() => handleChange(name, item)}>
                {item}
                <Checkbox />
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, { setFilters, setPage })(FilterGroup);

FilterGroup.propTypes = {
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
