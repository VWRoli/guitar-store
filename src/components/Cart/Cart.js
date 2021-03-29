import { useCartContext } from './cartContext';
import CartItem from './CartItem';
import { priceFormatter } from '../../helpers';

const Cart = () => {
  const { cart, total, clearCart } = useCartContext();

  return (
    <section className="cart">
      <h1 className="cart-title">Your Cart:</h1>
      {cart.length === 0 ? (
        <div className="your-cart">
          <h3 className="empty-cart-msg">
            You don't have any products in your cart yet.
          </h3>
        </div>
      ) : (
        <div className="your-cart">
          {cart.map((el) => (
            <CartItem item={el} key={el.id} />
          ))}
        </div>
      )}
      {cart.length === 0 ? (
        ''
      ) : (
        <div className="clear-btn-wrapper">
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}

      <div className="cart-total">
        <h3>Total:</h3>
        <h3>{priceFormatter(total)}</h3>
      </div>
    </section>
  );
};

export default Cart;
