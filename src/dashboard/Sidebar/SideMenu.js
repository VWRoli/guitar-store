import { NavLink } from 'react-router-dom';

const LINK_ITEMS = [
  { label: 'Dashboard', route: '/dashboard' },
  { label: 'Products', route: '/dashboard/products' },
  { label: 'Orders', route: '/dashboard/orders' },
  { label: 'Customers', route: '/dashboard/customers' },
  { label: 'Addresses', route: '/dashboard/customers/addresses' },
  { label: 'Stats', route: '/dashboard/stats' },
];

const SideMenu = () => {
  return (
    <ul className="admin-side-menu">
      {LINK_ITEMS.map((item) => (
        <li key={item.label}>
          <NavLink to={item.route}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
