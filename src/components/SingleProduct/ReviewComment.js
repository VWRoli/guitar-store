import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ReviewComment = ({ body, email, name, id }) => {
  return (
    <article>
      <header>
        <h3>
          {name}
          <span>
            {Array.from(Array(id)).map((_, i) => (
              <FaStar key={i} className='star-icon' />
            ))}
          </span>
        </h3>
        <p>By: {email}</p>
      </header>
      <p className='content'>{body}</p>
    </article>
  );
};

export default ReviewComment;

ReviewComment.propTypes = {
  body: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
