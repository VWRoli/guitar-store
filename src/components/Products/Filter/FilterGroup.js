import { useProductContext } from '../productContext';

import Checkbox from './Checkbox';

const FilterGroup = ({ items, name }) => {
  const { setFilters, filter, setPage } = useProductContext();

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

export default FilterGroup;
