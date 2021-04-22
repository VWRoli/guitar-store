import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { priceFormatter } from '../helpers';
import { connect } from 'react-redux';
import { closeMessage } from '../actions/modalActions';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  isMessageOpen: state.modal.isMessageOpen,
  amount: state.cart.amount,
  total: state.cart.total,
});

const SuccessMessage = ({ isMessageOpen, closeMessage, total, amount }) => {
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
      <div className='msg-container'>
        <h2>Item added to your cart</h2>
        <div className='summary-msg'>
          <p>
            You have <span>{amount}</span> item in your cart
          </p>
          <p>
            Total Cost: <span>{priceFormatter(total)}</span>
          </p>
        </div>
        <div className='success-btn-wrapper'>
          <Link to='#' className='continue-btn' onClick={closeMessage}>
            Continue Shopping
          </Link>
          <Link to='/cart' className='cart-btn' onClick={closeMessage}>
            Cart / Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { closeMessage })(SuccessMessage);

SuccessMessage.propTypes = {
  isMessageOpen: PropTypes.bool,
  closeMessage: PropTypes.func,
  total: PropTypes.number,
  amount: PropTypes.number,
};
