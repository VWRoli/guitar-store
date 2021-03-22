import ListItem from '../ListItem';
import { useGlobalContext } from '../../context';
import { settings } from '../../helpers';
import Slider from 'react-slick';
import Loading from '../../Loading';
import Error from '../../Error';

const OnSaleList = () => {
  const { guitars, amps, isLoading, isError } = useGlobalContext();

  //Filter on sale products
  const guitarsOnSale = guitars.filter((guitars) => guitars.is_on_sale);
  const ampsOnSale = amps.filter((amp) => amp.is_on_sale);

  //Filter top seller products
  const topGuitars = guitars.filter((guitars) => guitars.is_top_seller);
  const topAmps = amps.filter((amp) => amp.is_top_seller);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error Message
  if (isError) {
    return <Error />;
  }

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

export default OnSaleList;
