import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-sign" />
      <p>
        Error fetching products data, please refresh the page or try again
        later...
      </p>
    </div>
  );
};

export default Error;
