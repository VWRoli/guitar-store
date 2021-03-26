import { useFetch } from '../../../useFetch';
import { API_ROOT } from '../../../constant';
import Error from '../../../Error';
import Loading from '../../../Loading';
import FilterGroup from './FilterGroup';

const Filters = () => {
  const { data, isError, isLoading } = useFetch(API_ROOT);
  console.log(data);

  //Loading screen
  if (isLoading) return <Loading />;

  //Errro handling
  if (isError) return <Error />;

  //Filter groups
  const filterGroups = (array, filter) => {
    return [...new Set(array.map((item) => item[filter]))];
  };
  console.log(filterGroups(data, 'color'));

  return (
    <section className="filters">
      <h1>Filters:</h1>
      <FilterGroup items={filterGroups(data, 'category')} name={'Categories'} />
      <FilterGroup items={filterGroups(data, 'type')} name={'Type'} />
      <FilterGroup items={filterGroups(data, 'brand')} name={'Brands'} />
      <FilterGroup items={filterGroups(data, 'color')} name={'Color'} />
      <FilterGroup
        items={filterGroups(data, 'orientation')}
        name={'Orientation'}
      />
    </section>
  );
};

export default Filters;
