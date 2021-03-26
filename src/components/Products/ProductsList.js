import { useProductContext } from './productContext';
import ListItem from '../ListItem';
import Loading from '../../Loading';
import Error from '../../Error';
import ResultOptions from './ResultOptions';

const ProductsList = () => {
  const { products, isLoading, isError, errorMsg } = useProductContext();

  //Loading screen
  //if (isLoading) return ;

  //Error message
  if (isError) return <Error msg={errorMsg} />;

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
