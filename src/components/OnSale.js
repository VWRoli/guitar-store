import { filterProducts } from '../helpers';
import { useFetch } from '../useFetch';
import ListItem from './ListItem';
import Loading from '../Loading';
import Error from '../Error';
import { API_ROOT } from '../constants/constant';

const OnSale = () => {
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
  const guitarsOnSale = filterProducts(products, 'guitar', 'isOnSale');
  const ampsOnSale = filterProducts(products, 'amp', 'isOnSale');
  const productsOnSale = [...guitarsOnSale, ...ampsOnSale];

  return (
    <>
      <h1 className='onsale-title'>Our On Sale Products:</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='onsale-wrapper'>
          {productsOnSale.map((product) => (
            <ListItem product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default OnSale;
