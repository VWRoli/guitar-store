import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import PropTypes from 'prop-types';
//Components
import Filters from './Filter/Filters';
import ProductsList from './ProductsList';
import SearchBar from './SearchBar';
import ResultOptions from './ResultOptions/ResultOptions';

const mapStateToProps = (state) => ({
  page: state.products.page,
  filter: state.products.filter,
  displayItems: state.products.displayItems,
  sorting: state.products.sorting,
  searchQuery: state.products.searchQuery,
});

const Products = ({
  fetchProducts,
  page,
  filter,
  displayItems,
  sorting,
  searchQuery,
}) => {
  const getProducts = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);
  useEffect(() => {
    getProducts();
  }, [getProducts, page, filter, displayItems, sorting, searchQuery]);

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

export default connect(mapStateToProps, { fetchProducts })(Products);

Products.propTypes = {
  page: PropTypes.number,
  fetchProducts: PropTypes.func,
  filter: PropTypes.array,
  sorting: PropTypes.string,
  displayItems: PropTypes.number,
  searchQuery: PropTypes.string,
};
