import Filters from './Filters';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <section className="products">
      <h2>Products</h2>
      <div className="container">
        <Filters />
        <ProductsList />
      </div>
    </section>
  );
};

export default Products;
