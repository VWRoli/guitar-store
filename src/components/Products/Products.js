import Filters from './Filter/Filters';
import ProductsList from './ProductsList';
import { useState } from 'react';
import SearchBar from './SearchBar';

const Products = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="products">
      <SearchBar />
      <div className="container">
        <Filters visible={visible} setVisible={setVisible} />
        <ProductsList visible={visible} setVisible={setVisible} />
      </div>
    </section>
  );
};

export default Products;
