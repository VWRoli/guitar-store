import ListItem from '../ListItem';
import { settings } from '../../helpers';
import Slider from 'react-slick';
import Loading from '../../Loading';
import Error from '../../Error';
import { useFetch } from '../../useFetch';
import { API_ROOT } from '../../constant';

const ListContainer = () => {
  const { data: products, isLoading, isError } = useFetch(API_ROOT);
  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error Message
  if (isError) {
    return <Error />;
  }

  //Get on sale guitars
  const guitarsOnSale = products.filter(
    (product) => product.category === 'guitar' && product.isOnSale
  );

  //Get amps on sale
  const ampsOnSale = products.filter(
    (product) => product.category === 'amp' && product.isOnSale
  );

  //Get top seller guitars
  const topGuitars = products.filter(
    (product) => product.category === 'guitar' && product.isTopSeller
  );

  //Get top seller amps
  const topAmps = products.filter(
    (product) => product.category === 'amp' && product.isTopSeller
  );

  return (
    <>
      <h2 className="list-title">Guitars On Sale:</h2>
      <Slider {...settings} className="list">
        {guitarsOnSale.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </Slider>

      <h2 className="list-title">Amps On Sale:</h2>

      <Slider {...settings} className="list">
        {ampsOnSale.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </Slider>

      <h2 className="list-title">Top Seller Guitars:</h2>
      <Slider {...settings} className="list">
        {topGuitars.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </Slider>

      <h2 className="list-title">Top Seller Amps:</h2>

      <Slider {...settings} className="list">
        {topAmps.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </Slider>
    </>
  );
};

export default ListContainer;
