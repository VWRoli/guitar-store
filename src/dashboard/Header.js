import { Link } from 'react-router-dom';
import { FaCog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="admin-header">
      <div className="breadcrumbs">
        <h1>Dashboard</h1>
        <p>Dashboard &gt; Main</p>
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
