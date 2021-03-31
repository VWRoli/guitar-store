import Filters from './Filter/Filters';
import ProductsList from './ProductsList';
import { useState } from 'react';

const Products = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="products">
      <div className="container">
        <Filters visible={visible} setVisible={setVisible} />
        <ProductsList visible={visible} setVisible={setVisible} />
      </div>
    </section>
  );
};

export default Products;
