import ProfileMenu from './ProfileMenu';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import SideMenu from './SideMenu';

const Sidebar = ({ handleToggler, isExpanded }) => {
  return (
    <aside className={isExpanded ? 'admin-sidebar' : 'admin-sidebar collapsed'}>
      <div className="collapse-menu">
        {isExpanded ? (
          <FiChevronsLeft
            className="collapse-menu-btn"
            onClick={handleToggler}
          />
        ) : (
          <FiChevronsRight
            className="collapse-menu-btn"
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
