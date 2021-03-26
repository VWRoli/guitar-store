import Filters from './Filter/Filters';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <Filters />
        <ProductsList />
      </div>
    </section>
  );
};

export default Products;
