import { useProductContext } from './productContext';
import ListItem from '../ListItem';
import Loading from '../../Loading';
import Error from '../../Error';
import Pagination from './Pagination';

const ProductsList = () => {
  const { products, isLoading, isError, errorMsg } = useProductContext();

  //Loading screen
  // console.log(isLoading);
  if (isLoading) return <Loading />;

  if (isError) return <Error msg={errorMsg} />;

  return (
    <section className="products-list">
      <div className="product-wrapper">
        {products.map((product) => (
          <ListItem product={product} key={product.id} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ProductsList;
