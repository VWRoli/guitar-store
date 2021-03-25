import Pagination from './Pagination';
import { useProductContext } from './productContext';

const ResultOptions = () => {
  const { setDisplayItems, setPage } = useProductContext();

  const adjustDisplayItems = (item) => {
    setDisplayItems(item);
    setPage(1);
  };

  return (
    <section className="result-options">
      <div className="display-options">
        <button onClick={() => adjustDisplayItems(9)}>9</button>
        <button onClick={() => adjustDisplayItems(18)}>18</button>
        <button onClick={() => adjustDisplayItems(36)}>36</button>
      </div>
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
