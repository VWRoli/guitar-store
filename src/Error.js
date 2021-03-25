import { FaExclamationTriangle } from 'react-icons/fa';

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
