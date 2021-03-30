import { Link } from 'react-router-dom';
import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa';
import { useCartContext } from './cartContext';
import { priceFormatter } from '../../helpers';

const CartItem = ({ item }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const { name, id, price, images, amount, isOnSale } = item;

  const onSalePrice = price * 0.9;

  return (
    <div className="your-cart-item">
      <div className="cart-item-img">
        <img src={images[0]} alt={name} />
      </div>
      <div className="item-info">
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <small>ID: {id}</small>
        <p>
          Orders placed until 12:00, will be shipped the same day, if the item
          is in stock.
        </p>
        <button className="delete-item" onClick={() => removeItem(id)}>
          <FaTrash />
        </button>
      </div>
      <div className="item-price">
        <h3>
          {isOnSale ? (
            <>
              <span className="old-price">{priceFormatter(price)}</span>
              <span>{priceFormatter(onSalePrice * amount)}</span>
            </>
          ) : (
            priceFormatter(price * amount)
          )}
        </h3>
        <div>
          Quantity
          <div className="quantity-controls">
            <button onClick={() => toggleAmount(id, 'decrease')}>
              <FaChevronDown />
            </button>

            <form>
              <p>{amount}</p>
            </form>
            <button onClick={() => toggleAmount(id, 'increase')}>
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
