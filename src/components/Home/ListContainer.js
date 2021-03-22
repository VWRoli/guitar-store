import ListItem from '../ListItem';
import { useGlobalContext } from '../../context';
import { settings } from '../../helpers';
import Slider from 'react-slick';
import Loading from '../../Loading';
import Error from '../../Error';

const OnSaleList = () => {
  const { guitars, amps, isLoading } = useGlobalContext();

  const guitarsOnSale = guitars.filter((guitars) => guitars.isOnSale);
  const ampsOnSale = amps.filter((amps) => amps.isOnSale);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error Message
  if (isLoading) {
    return <Error />;
  }

  return (
    <>
      <h2 className="list-title">Our Guitar Sales:</h2>
      <Slider {...settings} className="list">
        {guitarsOnSale.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </Slider>

      <h2 className="list-title">Our Amps Sales:</h2>

      <Slider {...settings} className="list">
        {ampsOnSale.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </Slider>
    </>
  );
};

export default OnSaleList;
