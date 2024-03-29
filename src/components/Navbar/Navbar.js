import { NavLink, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {
  FaShoppingCart,
  FaBalanceScale,
  FaBars,
  FaChevronCircleUp,
} from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Components
import AccountLogin from './AccountLogin';

const mapStateToProps = (state) => ({
  compare: state.compare.compare,
  amount: state.cart.amount,
});

const Navbar = ({ compare, amount }) => {
  //Scroll to top button
  const bannerRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obsCallback = (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setVisible(false) : setVisible(true);
      });
    };

    const obsOptions = {
      root: null,
      threshold: 1,
    };

    const banner = bannerRef.current;

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    if (banner) observer.observe(banner);

    return () => {
      if (banner) observer.unobserve(banner);
    };
  }, [bannerRef]);

  //Toggle mobile menu
  const [active, setActive] = useState(false);

  const LINK_ITEMS = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'About', route: '/about' },
  ];

  return (
    <>
      <nav id="nav">
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
                  <NavLink
                    to={link.route}
                    activeClassName="active-link"
                    exact={true}
                    onClick={() => {
                      setActive(false);
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="nav-controls">
            <AccountLogin />
            <Link
              to="/compare"
              className="navbar-icons navbar-cart"
              onClick={() => {
                setActive(false);
              }}
            >
              <FaBalanceScale />
              <span className="cart-item-total">{compare.length}</span>
            </Link>

            <Link
              to="/cart"
              className="navbar-icons navbar-cart"
              onClick={() => {
                setActive(false);
              }}
            >
              <FaShoppingCart />
              <span className="cart-item-total">{amount}</span>
            </Link>
          </div>
        </div>
      </nav>

      <div id="sale-banner" ref={bannerRef}>
        <p>
          Check out our On Sale Porducts! <Link to="/onSale">Here!</Link>
        </p>
      </div>
      <ScrollLink
        to="nav"
        smooth={true}
        duration={500}
        className={visible ? 'to-top to-top-visible' : 'to-top'}
      >
        <FaChevronCircleUp />
      </ScrollLink>
    </>
  );
};

export default connect(mapStateToProps)(Navbar);

Navbar.propTypes = {
  compare: PropTypes.array,
  amount: PropTypes.number,
};
