import { useProductContext } from './productContext';

const Filters = () => {
  const { products } = useProductContext();
  console.log(products);
  return (
    <div>
      <h1>Filters</h1>
    </div>
  );
};

export default Filters;
