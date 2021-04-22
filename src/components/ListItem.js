import {
  FaCartPlus,
  FaBalanceScale,
  FaMinusSquare,
  FaCheckSquare,
  FaStar,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { priceFormatter } from '../helpers';
import { connect } from 'react-redux';
import { openMessage } from '../actions/modalActions';
import { addCompareItem } from '../actions/compareActions';
import { addCartItem } from '../actions/cartActions';

const mapStateToProps = (state) => ({
  compare: state.compare.compare,
});

const ListItem = ({
  product,
  openMessage,
  compare,
  addCompareItem,
  addCartItem,
}) => {
  const {
    images,
    name,
    price,
    inStock,
    type,
    isTopSeller,
    isOnSale,
    id,
    rating,
  } = product;

  const onSalePrice = price * 0.9;

  const handleCart = () => {
    openMessage();
    addCartItem(product);
  };

  const isCompare = compare.some((item) => item.id === id);

  return (
    <article className='list-item'>
      {isOnSale ? <div className='sale-sticker'>On Sale!</div> : ''}
      {isTopSeller ? <div className='top-seller-sticker'>Top Seller</div> : ''}

      <div className='img-container'>
        <Link to={`/product/${id}`}>
          <img src={images[0]} alt={name} />
        </Link>
      </div>
      <div className='info-box'>
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <div className='type-rating'>
          <span>{type}</span>
          <span>
            {Array.from(Array(rating)).map((_, i) => (
              <FaStar key={i} className='star-icon' />
            ))}

            <span className='rating-number'>{rating}</span>
          </span>
        </div>
      </div>
      <div className='price-box'>
        <div className='price'>
          <h2>
            {isOnSale ? (
              <>
                <span className='old-price'>{priceFormatter(price)}</span>
                <span>{priceFormatter(onSalePrice)}</span>
              </>
            ) : (
              priceFormatter(price)
            )}
          </h2>
          <p className='stock'>
            In Stock:{' '}
            {inStock ? (
              <FaCheckSquare className='stock-icon' />
            ) : (
              <FaMinusSquare className='outofstock-icon' />
            )}
          </p>
        </div>
        <div className='controls'>
          <button
            className={!isCompare ? 'control-icons' : 'disable-btn'}
            onClick={() => addCompareItem(product)}
          >
            <FaBalanceScale />
          </button>
          <button
            className={inStock ? 'control-icons' : 'disable-btn'}
            onClick={handleCart}
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </article>
  );
};

export default connect(mapStateToProps, {
  openMessage,
  addCompareItem,
  addCartItem,
})(ListItem);

ListItem.propTypes = {
  product: PropTypes.object.isRequired,
};
