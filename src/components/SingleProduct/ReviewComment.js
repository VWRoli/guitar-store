import { FaStar } from 'react-icons/fa';

const ReviewComment = ({ body, email, name, id }) => {
  return (
    <article>
      <header>
        <h3>
          {name}
          <span>
            {Array.from(Array(id)).map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </span>
        </h3>
        <p>By: {email}</p>
      </header>
      <p className="content">{body}</p>
    </article>
  );
};

export default ReviewComment;
