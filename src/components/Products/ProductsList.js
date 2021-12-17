import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//Components
import ListItem from '../ListItem';
import Error from '../../Error';
import Skeleton from '../Skeleton';

const mapStateToProps = (state) => ({
  products: state.products.products,
  errorMsg: state.products.errorMsg,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
});

const ProductsList = ({ products, isLoading, isError, errorMsg }) => {
  const skeletonArray = [...Array(6).keys()];

  //Loading screen
  if (isLoading)
    return (
      <>
        {skeletonArray.map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
    );

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

export default connect(mapStateToProps)(ProductsList);

ProductsList.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMsg: PropTypes.string,
};
