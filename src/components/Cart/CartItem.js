import { Link } from 'react-router-dom';
import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa';

const CartItem = ({ item }) => {
  console.log(item);
  const { name, id, price, image, amount } = item;

  const handleChange = (e) => {
    console.log(e.target.value);
  };
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
        <button className="delete-item">
          <FaTrash />
        </button>
      </div>
      <div className="item-price">
        <h3>{price}</h3>
        <div>
          Quantity
          <div className="quantity-controls">
            <button>
              <FaChevronUp />
            </button>
            <form>
              <label htmlFor="quantity">
                <input
                  type="number"
                  value={amount}
                  placeholder={amount}
                  onChange={handleChange}
                />
              </label>
            </form>

            <button>
              <FaChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
