import { useProductContext } from './productContext';
import ListItem from '../ListItem';
import Loading from '../../Loading';
import Error from '../../Error';

const ProductsList = () => {
  const { products, isLoading, isError, errorMsg } = useProductContext();

  //Loading screen
  if (isLoading) return <Loading />;

  //Error message
  if (isError) return <Error msg={errorMsg} />;

  //Render if there is no match for the filters
  if (products.length === 0)
    return <h2 className="no-match-msg">No Products Match</h2>;

  return (
    <>
      {products.map((product) => (
        <ListItem product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductsList;
