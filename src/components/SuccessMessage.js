import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './Cart/cartContext';
import { priceFormatter } from '../helpers';

const SuccessMessage = () => {
  const { total, amount, isMessageOpen, closeMessage } = useCartContext();

  //Close Message with Esc
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeMessage();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div
      className={isMessageOpen ? 'overlay show-message' : 'overlay'}
      onClick={closeMessage}
    >
      <div className="msg-container">
        <h2>Item added to your cart</h2>
        <div className="summary-msg">
          <p>
            You have <span>{amount}</span> item in your cart
          </p>
          <p>
            Total Cost: <span>{priceFormatter(total)}</span>
          </p>
        </div>
        <div>
          <Link to="/products" className="continue-btn" onClick={closeMessage}>
            Continue Shopping
          </Link>
          <Link to="/cart" className="cart-btn" onClick={closeMessage}>
            Cart / Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
