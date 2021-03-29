import { useProductContext } from './productContext';
import ListItem from '../ListItem';
import Loading from '../../Loading';
import Error from '../../Error';
import ResultOptions from './ResultOptions';

const ProductsList = () => {
  const {
    products,
    isLoading,
    isError,
    errorMsg,
    filter,
  } = useProductContext();

  //Error message
  if (isError) return <Error msg={errorMsg} />;

  //Render if there is no match for the filters
  if (products[0] === undefined && filter[0])
    return <h2 className="no-match-msg">No Products Match</h2>;

  return (
    <section className="products-list">
      <ResultOptions />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product-wrapper">
          {products.map((product) => (
            <ListItem product={product} key={product.id} />
          ))}
        </div>
      )}
      <ResultOptions />
    </section>
  );
};

export default ProductsList;
