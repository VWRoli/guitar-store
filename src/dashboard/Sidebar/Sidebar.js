import { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import SideMenu from './SideMenu';

const Sidebar = () => {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <aside className={isExpanded ? 'admin-sidebar' : 'admin-sidebar collapsed'}>
      <div className="minimize-menu">
        {isExpanded ? (
          <FiChevronsLeft
            className="minimize-menu-btn"
            onClick={handleToggler}
          />
        ) : (
          <FiChevronsRight
            className="minimize-menu-btn"
            onClick={handleToggler}
          />
        )}
      </div>
      <ProfileMenu />
      <SideMenu />
    </aside>
  );
};

export default Sidebar;
