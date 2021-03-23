import { priceFormatter, settings } from '../../helpers';
import {
  FaCartPlus,
  FaBalanceScale,
  FaSquare,
  FaCheckSquare,
  FaStar,
  FaRegImage,
} from 'react-icons/fa';
import Slider from 'react-slick';

const SingleProductHeader = ({ product }) => {
  const {
    name,
    desc,
    id: productId,
    in_stock,
    is_on_sale,
    is_top_seller,
    price,
    rating,
    images,
  } = product;

  //todo
  const onSalePrice = price * 0.9;

  return (
    <section className="single-product-header">
      <header>
        <h1>{name}</h1>
        <div className="type-rating">
          <span>Item ID: {productId}</span>
          <span>
            {Array.from(Array(rating)).map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}

            <span className="rating-number">{rating}</span>
          </span>
        </div>
      </header>
      <div className="info-banner">
        {is_on_sale ? <div className="sale-sticker">On Sale!</div> : ''}
        {is_top_seller ? (
          <div className="top-seller-sticker">Top Seller</div>
        ) : (
          ''
        )}
      </div>
      <div className="header-wrapper">
        <article className="product-media">
          <div className="product-img-container">
            <img src={images[0]} alt={name} />
          </div>
        </article>
        <aside className="product-price-section">
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
              {in_stock ? (
                <FaCheckSquare className="stock-icon" />
              ) : (
                <FaSquare />
              )}
            </p>
          </div>
          <div className="add-to-cart">
            <form action="/">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" name="quantity" id="quantity" />
              <button type="submit">Add to Cart</button>
            </form>
          </div>
          <div className="short-description">
            <h3>Product Description:</h3>
            <p>{desc}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SingleProductHeader;
