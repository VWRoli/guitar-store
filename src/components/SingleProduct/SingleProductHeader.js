import { priceFormatter, calcOnSale } from '../../helpers';
import {
  FaCartPlus,
  FaBalanceScale,
  FaMinusSquare,
  FaCheckSquare,
  FaStar,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import ImageSlider from './ImageSlider';
import { useCartContext } from '../Cart/cartContext';

const SingleProductHeader = ({ product }) => {
  const { addItem, openMessage, compare } = useCartContext();

  const {
    name,
    desc,
    id: productId,
    inStock,
    isOnSale,
    isTopSeller,
    price,
    rating,
    images,
  } = product;

  const onSalePrice = calcOnSale(price);

  const isCompare = compare.some((item) => item.id === productId);

  const handleCart = () => {
    openMessage();
    addItem(product);
  };

  const handleCompare = () => {
    if (!isCompare) {
      addItem(product, 'compare');
    }
  };

  return (
    <section className="single-product-header">
      <header>
        <h1>{name}</h1>
        <div className="type-rating">
          <span>Item ID: {productId}</span>
          <span>
            {Array.from(Array(rating)).map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}

            <span className="rating-number">{rating}</span>
          </span>
        </div>
      </header>
      <div className="info-banner">
        {isOnSale ? <div className="sale-sticker">On Sale!</div> : ''}
        {isTopSeller ? (
          <div className="top-seller-sticker">Top Seller</div>
        ) : (
          ''
        )}
      </div>
      <div className="header-content">
        <article className="product-left">
          <ImageSlider images={images} />
        </article>

        <aside className="product-right">
          <div className="price-section">
            <h2>
              {isOnSale ? (
                <>
                  <span className="old-price">{priceFormatter(price)}</span>
                  <span>{priceFormatter(onSalePrice)}</span>
                </>
              ) : (
                priceFormatter(price)
              )}
            </h2>
            <p className="stock">
              In Stock:
              {inStock ? (
                <FaCheckSquare className="stock-icon" />
              ) : (
                <FaMinusSquare className="outofstock-icon" />
              )}
            </p>
          </div>

          <div className="buy-section">
            <button
              className={inStock ? 'add-to-cart-btn' : 'disable'}
              onClick={handleCart}
            >
              <FaCartPlus />
              Add to Cart
            </button>
            <small>
              If you order until 12:00, we ship the same day if the item is in
              stock.
            </small>

            <button
              className={!isCompare ? 'add-to-compare' : 'disable-btn'}
              onClick={handleCompare}
            >
              <FaBalanceScale />
            </button>
          </div>

          <div className="short-description">
            <h3>Product Description:</h3>
            <p>
              {`${desc.substring(0, 200)}`}...
              <Link
                to="overview"
                smooth={true}
                duration={500}
                className="read-more"
              >
                Read More
              </Link>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SingleProductHeader;

SingleProductHeader.propTypes = {
  product: PropTypes.object.isRequired,
};
