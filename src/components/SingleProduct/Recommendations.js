import Slider from 'react-slick';
import { settings } from '../../helpers';
import { useFetch } from '../../useFetch';
import { API_ROOT } from '../../constant';
import Loading from '../../Loading';
import Error from '../../Error';
import ListItem from '../ListItem';

const Recommendations = () => {
  const { data: products, isLoading, isError } = useFetch(API_ROOT);

  //Generate a random number
  const random = Math.floor(Math.random() * products.length);

  //Get recommended guitars (6 random products)
  const recommendations = products.slice(random - 6, random);
  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error Message
  if (isError) {
    return <Error />;
  }

  return (
    <section className="recommendations">
      <div className="container">
        <h2>Recommended For You</h2>
        <div className="list-container">
          <Slider {...settings} className="list">
            {recommendations.map((product) => (
              <ListItem key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
