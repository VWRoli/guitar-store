import { Link } from 'react-router-dom';
import { FaCog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import Breadcrumbs from './Breadcrumbs';

const Header = ({ isExpanded }) => {
  return (
    <header className={isExpanded ? 'admin-header ' : 'admin-header collapsed'}>
      <div className="breadcrumbs-container">
        <h1>Dashboard</h1>
        <Breadcrumbs />
      </div>
      <div className="admin-header-icons-container">
        <Link to="/">
          <FaSignOutAlt className="admin-header-icons" />
        </Link>
        <FaEnvelope className="admin-header-icons" />
        <FaCog className="admin-header-icons" />
      </div>
    </header>
  );
};

export default Header;
