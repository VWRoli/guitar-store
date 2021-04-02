import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import Error from '../../Error';
import { useFetch } from '../../useFetch';
import { API_ROOT } from '../../constant';

import SingleProductHeader from './SingleProductHeader';
import ProductOverview from './ProductOverview';
import Recommendations from './Recommendations';
import Reviews from './Reviews';

const SingleProduct = () => {
  //Get product id
  const { id } = useParams();

  const { data: product, isLoading, isError } = useFetch(`${API_ROOT}${id}`);

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error message
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <SingleProductHeader product={product} />
      <Recommendations />
      <ProductOverview product={product} />
      <Reviews />
    </>
  );
};

export default SingleProduct;
