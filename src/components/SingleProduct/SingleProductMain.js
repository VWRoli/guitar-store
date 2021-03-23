import { priceFormatter } from '../../helpers';
import {
  FaCartPlus,
  FaBalanceScale,
  FaSquare,
  FaCheckSquare,
  FaStar,
} from 'react-icons/fa';

const SingleProductMain = ({ product }) => {
  const {
    name,

    desc,
    id: productId,
    in_stock,
    is_on_sale,
    price,
    rating,
  } = product;

  //todo
  const onSalePrice = price * 0.9;

  return (
    <section className="single-product-main">
      <header>
        <h1>{name}</h1>
        <small>{productId}</small>
        <p>{rating}</p>
      </header>
      <article className="product-media">
        <div className="product-img-container">
          <img src="" alt={name} />
        </div>
        <div className="short-description">
          <p>{desc}</p>
        </div>
      </article>
      <aside>
        <div className="price">
          <h2>
            {is_on_sale ? (
              <>
                <span className="old-price">{priceFormatter(price)}</span>
                <span>{priceFormatter(onSalePrice)}</span>
              </>
            ) : (
              priceFormatter(price)
            )}
          </h2>
          <p>
            In Stock:{' '}
            {in_stock ? <FaSquare /> : <FaCheckSquare className="stock-icon" />}
          </p>
        </div>
      </aside>
      {/*   {currentProduct.is_on_sale ? (
    <div className="sale-sticker">On Sale!</div>
  ) : (
    ''
  )}
  {currentProduct.is_top_seller ? (
    <div className="top-seller-sticker">Top Seller</div>
  ) : (
    ''
  )} */}
    </section>
  );
};

export default SingleProductMain;
