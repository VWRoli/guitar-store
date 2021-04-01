import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountLogin = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <button
        className="navbar-icons"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <FaUser />
      </button>
      {isShown && (
        <form
          className="login-box"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          New customer? <Link to="/">Register here!</Link>
          <button type="submit">Log In</button>
        </form>
      )}
    </>
  );
};

export default AccountLogin;
