import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaSearch,
  FaShoppingCart,
  FaBalanceScale,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  //Toggle mobile menu
  const [active, setActive] = useState(false);

  //Activemenu
  const [activeLink, setActiveLink] = useState(0);

  const LINK_ITEMS = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'About', route: '/about' },
  ];

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="mobile-header">
            <div className="nav-header">
              <h1>
                <Link to="/">
                  Guitar<span>Store</span>
                </Link>
              </h1>
            </div>
            <button className="menu-bars" onClick={() => setActive(!active)}>
              <FaBars className="bars-icon" />
            </button>
          </div>
          <ul className={active ? 'nav-links active-menu' : 'nav-links'}>
            {LINK_ITEMS.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    to={link.route}
                    onClick={() => {
                      setActive(false);
                      setActiveLink(i);
                    }}
                    className={i === activeLink ? 'active-link' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
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
