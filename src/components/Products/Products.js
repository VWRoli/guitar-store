import Filters from './Filter/Filters';
import ProductsList from './ProductsList';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ResultOptions from './ResultOptions/ResultOptions';

const Products = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="products">
      <SearchBar />
      <div className="container">
        <Filters visible={visible} setVisible={setVisible} />
        <section className="products-list">
          <ResultOptions visible={visible} setVisible={setVisible} />
          <div className="product-wrapper">
            <ProductsList />
          </div>
          <ResultOptions visible={visible} setVisible={setVisible} />
        </section>
      </div>
    </section>
  );
};

export default Products;
