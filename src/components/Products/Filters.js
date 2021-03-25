import { useProductContext } from './productContext';

const Filters = () => {
  const { products } = useProductContext();
  //console.log(products);
  return (
    <section className="filters">
      <h1>Filters</h1>
    </section>
  );
};

export default Filters;
