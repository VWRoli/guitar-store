import React from 'react';
import PropTypes from 'prop-types';
import AmpOverview from './AmpOverview';
import GuitarOverview from './GuitarOverview';

const ProductOverview = ({ product }) => {
  return (
    <section className="product-overview">
      <header>
        <h2 id="overview">Overview</h2>
      </header>
      <table>
        {product.category === 'guitar' ? (
          <GuitarOverview product={product} />
        ) : (
          <AmpOverview product={product} />
        )}
      </table>
      <div className="description">
        <h3>Description:</h3>
        {product.desc}
      </div>
    </section>
  );
};

export default ProductOverview;

ProductOverview.propTypes = {
  product: PropTypes.object.isRequired,
};
