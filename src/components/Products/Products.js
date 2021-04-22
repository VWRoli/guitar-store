import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
//Components
import Filters from './Filter/Filters';
import ProductsList from './ProductsList';
import SearchBar from './SearchBar';
import ResultOptions from './ResultOptions/ResultOptions';

const Products = ({ fetchProducts }) => {
  fetchProducts();
  const [visible, setVisible] = useState(false);
  return (
    <section className='products'>
      <SearchBar />
      <div className='container'>
        <Filters visible={visible} setVisible={setVisible} />
        <section className='products-list'>
          <ResultOptions visible={visible} setVisible={setVisible} />
          <div className='product-wrapper'>
            <ProductsList />
          </div>
          <ResultOptions visible={visible} setVisible={setVisible} />
        </section>
      </div>
    </section>
  );
};

export default connect(null, { fetchProducts })(Products);
