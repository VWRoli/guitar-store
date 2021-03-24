import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import Error from '../../Error';
import { useFetch } from '../../useFetch';
import { API_ROOT } from '../../constant';

import SingleProductHeader from './SingleProductHeader';

const SingleProduct = () => {
  //Get product id
  const { id } = useParams();
  const { guitars } = useGlobalContext();

  //check if product is a guitar, if not it is an amp
  const checkForGuitar = guitars.some((item) => id === item.id);

  const productUrl = checkForGuitar ? `guitars/${id}` : `amps/${id}`;

  const { data: product, isLoading, isError } = useFetch(
    `${API_ROOT}${productUrl}`
  );

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

  return <SingleProductHeader product={product} />;
};

export default SingleProduct;
