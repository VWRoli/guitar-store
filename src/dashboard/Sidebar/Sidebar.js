import ProfileMenu from './ProfileMenu';
import SideMenu from './SideMenu';

const LINK_ITEMS = [
  { label: 'Dashboard', route: '/admin' },
  { label: 'Products', route: '/admin/products' },
  { label: 'Orders', route: '/admin/orders' },
  { label: 'Customers', route: '/admin/customers' },
  { label: 'Stats', route: '/admin/stats' },
];

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ProfileMenu />
      <SideMenu />
    </aside>
  );
};

export default Sidebar;
