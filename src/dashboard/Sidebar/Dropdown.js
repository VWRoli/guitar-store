import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="admin-menu-item" onClick={() => setIsOpen(!isOpen)}>
        <span className="admin-menu-icons">{item.icon}</span>
        <span className="sidebar-text">
          <p>{item.label}</p>
        </span>

        <FaChevronDown
          className={isOpen ? 'dropdown-icon rotate-icon' : 'dropdown-icon'}
        />
      </li>
      <ul
        className={isOpen ? 'dropdown-menu toggle-dropdown' : 'dropdown-menu'}
      >
        {item.submenus.map((submenu, i) => {
          return (
            <li key={i} className="dropdown-menu-item">
              <span>{submenu.icon}</span>
              <span className="sidebar-text">
                <NavLink to={submenu.route}>{submenu.label}</NavLink>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  item: PropTypes.object,
};
