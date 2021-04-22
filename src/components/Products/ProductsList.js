import { connect } from 'react-redux';
//Components
import ListItem from '../ListItem';
import Loading from '../../Loading';
import Error from '../../Error';

const mapStateToProps = (state) => ({
  products: state.products.products,
  errorMsg: state.products.errorMsg,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
});

const ProductsList = ({ products, isLoading, isError, errorMsg }) => {
  //Loading screen
  if (isLoading) return <Loading />;

  //Error message
  if (isError) return <Error msg={errorMsg} />;

  //Render if there is no match for the filters
  if (products.length === 0)
    return <h2 className='no-match-msg'>No Products Match</h2>;

  return (
    <>
      {products.map((product) => (
        <ListItem product={product} key={product.id} />
      ))}
    </>
  );
};

export default connect(mapStateToProps)(ProductsList);
