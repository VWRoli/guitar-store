import { settings, filterProducts } from '../../helpers';
import Slider from 'react-slick';
import { useFetch } from '../../useFetch';
import { API_ROOT } from '../../constants/constant';
//Components
import ListItem from '../ListItem';
import Error from '../../Error';
import Loading from '../../Loading';
import Skeleton from '../Skeleton';
import SkeletonList from '../SkeletonList';

const ListContainer = () => {
  const { data: products, isLoading, isError } = useFetch(API_ROOT);
  //Loading screen
  /* if (isLoading) {
    return <Loading />;
  } */

  //Error Message
  if (isError) {
    return <Error />;
  }

  //Get on sale guitars
  const guitarsOnSale = filterProducts(products, 'guitar', 'isOnSale');

  //Get amps on sale
  const ampsOnSale = filterProducts(products, 'amp', 'isOnSale');

  //Get top seller guitars
  const topGuitars = filterProducts(products, 'guitar', 'isTopSeller');

  //Get top seller amps
  const topAmps = filterProducts(products, 'amp', 'isTopSeller');

  return (
    <>
      <h2 className="list-title">Guitars On Sale:</h2>
      {isLoading ? (
        <SkeletonList itemNumber={4} />
      ) : (
        <Slider {...settings} className="list">
          {guitarsOnSale.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </Slider>
      )}

      <h2 className="list-title">Amps On Sale:</h2>
      {isLoading ? (
        <SkeletonList itemNumber={4} />
      ) : (
        <Slider {...settings} className="list">
          {ampsOnSale.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </Slider>
      )}

      <h2 className="list-title">Top Seller Guitars:</h2>
      {isLoading ? (
        <SkeletonList itemNumber={4} />
      ) : (
        <Slider {...settings} className="list">
          {topGuitars.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </Slider>
      )}

      <h2 className="list-title">Top Seller Amps:</h2>
      {isLoading ? (
        <SkeletonList itemNumber={4} />
      ) : (
        <Slider {...settings} className="list">
          {topAmps.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default ListContainer;
