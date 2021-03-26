import { useProductContext } from '../productContext';

import Checkbox from './Checkbox';

const FilterGroup = ({ items, name }) => {
  const { setFilters } = useProductContext();

  return (
    <>
      <h3>{name}:</h3>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <label
                htmlFor={item}
                onChange={() => {
                  console.log(`&${name.toLowerCase()}=${item}`);
                  setFilters(`&${name.toLowerCase()}=${item}`);
                }}
              >
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
