import Error from '../../Error';
import Loading from '../../Loading';
import { useFetch } from '../../useFetch';
import ReviewComment from './ReviewComment';

const reviewsUrl = `http://jsonplaceholder.typicode.com/posts/1/comments`;

const Reviews = () => {
  const { data: reviews, isLoading, isError } = useFetch(reviewsUrl);

  //Handle Loading
  if (isLoading)
    return (
      <section id="product-reviews">
        <header>
          <h2 id="reviews">Reviews</h2>
        </header>
        <Loading />
      </section>
    );

  //Handle Error
  if (isError)
    return (
      <section id="product-reviews">
        <header>
          <h2 id="reviews">Reviews</h2>
        </header>
        <Error />
      </section>
    );

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
