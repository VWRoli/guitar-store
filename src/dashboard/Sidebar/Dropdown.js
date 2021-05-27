import { FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ item }) => {
  return (
    <>
      <li className="admin-menu-item" onClick={item.handleClick}>
        <span className="admin-menu-icons">{item.icon}</span>
        <p>{item.label}</p>
        <FaChevronDown />
      </li>
      <ul className="dropdown-menu">
        {item.submenus.map((submenu, i) => {
          return (
            <li key={i} className="dropdown-menu-item">
              <span>{submenu.icon}</span>
              <NavLink to={submenu.route}>{submenu.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
