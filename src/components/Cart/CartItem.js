import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa';
import { priceFormatter } from '../../helpers';
import { connect } from 'react-redux';
import { removeCartItem, toggleCartAmount } from '../../actions/cartActions';

const CartItem = ({ item, toggleCartAmount, removeCartItem }) => {
  const { name, id, price, images, amount, isOnSale } = item;

  const onSalePrice = price * 0.9;

  return (
    <div className='your-cart-item'>
      <div className='cart-item-img'>
        <img src={images[0]} alt={name} />
      </div>
      <div className='item-info'>
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <small>ID: {id}</small>
        <p>
          Orders placed until 12:00, will be shipped the same day, if the item
          is in stock.
        </p>
        <button className='delete-item' onClick={() => removeCartItem(id)}>
          <FaTrash />
        </button>
      </div>
      <div className='item-price'>
        <h3>
          {isOnSale ? (
            <>
              <span className='old-price'>{priceFormatter(price)}</span>
              <span>{priceFormatter(onSalePrice * amount)}</span>
            </>
          ) : (
            priceFormatter(price * amount)
          )}
        </h3>
        <div>
          Quantity
          <div className='quantity-controls'>
            <button onClick={() => toggleCartAmount(id, 'decrease')}>
              <FaChevronDown />
            </button>

            <form>
              <p>{amount}</p>
            </form>
            <button onClick={() => toggleCartAmount(id, 'increase')}>
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { toggleCartAmount, removeCartItem })(CartItem);

CartItem.propTypes = {
  item: PropTypes.object,
};
