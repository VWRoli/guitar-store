import { useFetch } from '../../../useFetch';
import { API_ROOT } from '../../../constants/constant';
import PropTypes from 'prop-types';
//Components
import Error from '../../../Error';
import FilterGroup from './FilterGroup';

const Filters = ({ visible, setVisible }) => {
  const { data, isError, isLoading } = useFetch(API_ROOT);

  //Error handling
  if (isError) return <Error />;

  //Filter groups
  const filterGroups = (array, filter) => {
    //filter is needed to remove undefined properties
    return [
      ...new Set(array.map((item) => item[filter]).filter((item) => item)),
    ];
  };

  return (
    <section className={visible ? 'filters show-filters' : 'filters'}>
      <h1 className="filters-title">Filters:</h1>
      <button className="close-filters" onClick={() => setVisible(!visible)}>
        Close Filters
      </button>
      <FilterGroup
        items={filterGroups(data, 'category')}
        name={'Category'}
        isLoading={isLoading}
      />
      <FilterGroup
        items={filterGroups(data, 'type')}
        name={'Type'}
        isLoading={isLoading}
      />
      <FilterGroup
        items={filterGroups(data, 'brand')}
        name={'Brand'}
        isLoading={isLoading}
      />
      <FilterGroup
        items={filterGroups(data, 'color')}
        name={'Color'}
        isLoading={isLoading}
      />
      <FilterGroup
        items={filterGroups(data, 'orientation')}
        name={'Orientation'}
      />
    </section>
  );
};

export default Filters;

Filters.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
