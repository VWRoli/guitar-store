import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaSearch,
  FaShoppingCart,
  FaBalanceScale,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="mobile-header">
            <div className="nav-header">
              <h1>
                Guitar<span>Store</span>
              </h1>
            </div>
            <button className="menu-bars" onClick={() => setActive(!active)}>
              <FaBars className="bars-icon" />
            </button>
          </div>
          <ul className={active ? 'nav-links active-menu' : 'nav-links'}>
            <li>
              <Link to="/" onClick={() => setActive(!active)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setActive(!active)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setActive(!active)}>
                About
              </Link>
            </li>
          </ul>
          <div className="nav-controls">
            <FaSearch className="control-icons" />
            <FaBalanceScale className="control-icons" />
            <FaShoppingCart className="control-icons" />
          </div>
        </div>
      </nav>
      <div className="sale-banner">
        <p>
          Check out our On Sale Porducts! <Link to="/onSale">Here!</Link>
        </p>
      </div>
    </>
  );
};

export default Navbar;
