import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBalanceScale } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h1>
              Guitar<span>Store</span>
            </h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="nav-controls">
            <FaSearch />
            <FaBalanceScale />
            <FaShoppingCart />
          </div>
        </div>
      </nav>
      <div className="sale-banner">
        <h2>
          Check out our On Sale Porducts! <Link to="/onSale">Here!</Link>
        </h2>
      </div>
    </>
  );
};

export default Navbar;
