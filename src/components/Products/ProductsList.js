import { useProductContext } from './productContext';
import ListItem from '../ListItem';
import Loading from '../../Loading';
import Error from '../../Error';
import ResultOptions from './ResultOptions';
import PropTypes from 'prop-types';

const ProductsList = ({ setVisible, visible }) => {
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
  if (products.length === 0 && filter[0])
    return <h2 className="no-match-msg">No Products Match</h2>;

  return (
    <section className="products-list">
      <ResultOptions visible={visible} setVisible={setVisible} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product-wrapper">
          {products.map((product) => (
            <ListItem product={product} key={product.id} />
          ))}
        </div>
      )}
      <ResultOptions visible={visible} setVisible={setVisible} />
    </section>
  );
};

export default ProductsList;

ProductsList.propTypes = {
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
