import Pagination from './Pagination';
import { useState } from 'react';
import DisplayButtons from './DisplayButtons';

const ResultOptions = () => {
  const [active, setActive] = useState(0);

  const BUTTONS = [{ label: '9' }, { label: '18' }, { label: '36' }];

  return (
    <section className="result-options">
      <DisplayButtons buttons={BUTTONS} setActive={setActive} active={active} />
      <Pagination />
      <form className="sorting-options">
        <label htmlFor="sort">Sort:</label>
        <select name="sort">
          <option value="default">Default</option>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="ratings">Customer Ratings</option>
        </select>
      </form>
    </section>
  );
};

export default ResultOptions;
