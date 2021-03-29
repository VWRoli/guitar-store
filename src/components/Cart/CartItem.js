import { Link } from 'react-router-dom';
import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa';
import { useCartContext } from './cartContext';

const CartItem = ({ item }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();

  const { name, id, price, image, amount } = item;

  return (
    <div className="your-cart-item">
      <div className="cart-item-img">
        <img src={image} alt={name} />
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
        <h3>{price}</h3>
        <div>
          Quantity
          <div className="quantity-controls">
            <button onClick={() => decreaseAmount(id)}>
              <FaChevronDown />
            </button>

            <form>
              <p>{amount}</p>
            </form>
            <button onClick={() => increaseAmount(id)}>
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
