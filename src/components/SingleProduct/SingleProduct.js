import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import Error from '../../Error';
import { useFetch } from '../../useFetch';
import { API_ROOT } from '../../constant';

import SingleProductHeader from './SingleProductHeader';
import ProductOverview from './ProductOverview';
import Recommendations from './Recommendations';

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

  /*  const {
    name,
    brand,
    color,
    country_origin,
    desc,
    fantasy_color,
    frert_number,
    id: productId,
    images,
    in_stock,
    is_on_sale,
    is_top_seller,
    neck_wood,
    orientation,
    pickups,
    price,
    rating,
    strings,
    type,
  } = product; */

  return (
    <>
      <SingleProductHeader product={product} />
      <Recommendations />
      <ProductOverview />
    </>
  );
};

export default SingleProduct;
