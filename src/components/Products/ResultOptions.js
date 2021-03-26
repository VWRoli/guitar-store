import Pagination from './Pagination';
import { useState } from 'react';
import DisplayButtons from './DisplayButtons';
import { useProductContext } from './productContext';

const ResultOptions = () => {
  const [active, setActive] = useState(0);
  const { sorting, setSorting } = useProductContext();

  const BUTTONS = [{ label: '9' }, { label: '18' }, { label: '36' }];

  const handleChange = (e) => {
    setSorting(e.target.value);
  };

  return (
    <section className="result-options">
      <DisplayButtons buttons={BUTTONS} setActive={setActive} active={active} />
      <Pagination />
      <form className="sorting-options">
        <label htmlFor="sort">Sort:</label>
        <select name="sort" value={sorting} onChange={handleChange}>
          <option value="?_sort=">Default</option>
          <option value="?_sort=price&_order=asc">Price Ascending</option>
          <option value="?_sort=price&_order=desc">Price Descending</option>
          <option value="?_sort=rating&_order=desc">Ratings</option>
        </select>
      </form>
    </section>
  );
};

export default ResultOptions;
