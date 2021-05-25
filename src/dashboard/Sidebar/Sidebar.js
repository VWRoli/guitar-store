import ProfileMenu from './ProfileMenu';
import SideMenu from './SideMenu';

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <ProfileMenu />
      <SideMenu />
    </aside>
  );
};

export default Sidebar;
