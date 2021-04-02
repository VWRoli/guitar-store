import Error from '../../Error';
import Loading from '../../Loading';
import { useFetch } from '../../useFetch';
import ReviewComment from './ReviewComment';

const reviewsUrl = `http://jsonplaceholder.typicode.com/posts/1/comments`;

const Reviews = () => {
  const { data: reviews, isLoading, isError } = useFetch(reviewsUrl);

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <section id="product-reviews">
      <header>
        <h2 id="reviews">Reviews</h2>
      </header>
      {reviews.map((review) => (
        <ReviewComment {...review} key={review.id} />
      ))}
    </section>
  );
};

export default Reviews;
