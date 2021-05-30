import { useFetch } from '../../useFetch';
import Loading from '../../Loading';
import Error from '../../Error';
import { Link } from 'react-router-dom';
import { priceFormatter } from '../../helpers';

const TopSellers = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useFetch(
    'https://my-guitarstore-api.herokuapp.com/products?_page=1&_limit=4'
  );

  //Loading screen
  if (isLoading) {
    return <Loading />;
  }

  //Error screen
  if (isError) {
    return <Error />;
  }

  return (
    <section className="admin-group">
      <header className="admin-group-header">
        <h4>Top Selling Products</h4>
      </header>
      <ul className="admin-main-top-content">
        {products.map((product) => (
          <li key={product.id} className="admin-top-seller-listitem">
            <div className="admin-top-seller-img-container">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div>
              <h5>
                {product.name}
                <span>Rating</span>
              </h5>
              <p>{product.type}</p>
            </div>
            <div className="admin-top-seller-price-wrapper">
              <h3>{priceFormatter(product.price)}</h3>
            </div>
          </li>
        ))}
      </ul>
      <div className="admin-group-footer">
        <Link to="/dashboard/products">See more...</Link>
      </div>
    </section>
  );
};

export default TopSellers;
