import { NavLink } from 'react-router-dom';

const LINK_ITEMS = [
  { label: 'Dashboard', route: '/admin/main' },
  { label: 'Products', route: '/admin/products' },
  { label: 'Orders', route: '/admin/orders' },
  { label: 'Customers', route: '/admin/customers' },
  { label: 'Stats', route: '/admin/stats' },
];

const SideMenu = () => {
  return (
    <ul className="admin-side-menu">
      {LINK_ITEMS.map((item) => (
        <li key={item.label}>
          <NavLink to={item.route} activeClassName="active-link">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
