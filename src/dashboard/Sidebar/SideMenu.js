import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Dropdown from './Dropdown';

const ADMIN_LINK_ITEMS = [
  { label: 'Dashboard', icon: <FaIcons.FaUserCog />, route: '/dashboard' },
  {
    label: 'Products',
    icon: <FaIcons.FaShoppingBasket />,
    route: '/dashboard/products',
  },
  {
    label: 'Orders',
    icon: <FaIcons.FaShoppingCart />,
    route: '/dashboard/orders',
  },
  {
    label: 'Customers',
    icon: <FaIcons.FaUsers />,
    submenus: [
      {
        label: 'Customers',
        icon: <FaIcons.FaUser />,
        route: '/dashboard/customers',
      },
      {
        label: 'Addresses',
        icon: <FaIcons.FaHome />,
        route: '/dashboard/customers/addresses',
      },
    ],
    handleClick(e) {
      const clicked = e.target.closest('.admin-menu-item');
      const dropdown = clicked.nextElementSibling;

      dropdown.classList.toggle('toggle-dropdown');
    },
  },

  { label: 'Stats', icon: <FaIcons.FaChartBar />, route: '/dashboard/stats' },
];

const SideMenu = () => {
  return (
    <ul className="admin-side-menu">
      {ADMIN_LINK_ITEMS.map((item, i) =>
        item.submenus ? (
          <Dropdown key={i} item={item} />
        ) : (
          <li key={i} onClick={item.handleClick} className="admin-menu-item">
            <span className="admin-menu-icons">{item.icon}</span>
            <NavLink to={item.route}>{item.label}</NavLink>
          </li>
        )
      )}
    </ul>
  );
};

export default SideMenu;
