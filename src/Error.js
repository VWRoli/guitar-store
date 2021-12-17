import { FaExclamationTriangle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Error = ({ msg }) => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-sign" />
      <p>Something went wrong. {msg}</p>
      <p>Please refresh the page or try again later...</p>
    </div>
  );
};

export default Error;

Error.propTypes = {
  msg: PropTypes.string,
};
