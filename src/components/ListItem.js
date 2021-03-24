import {
  FaCartPlus,
  FaBalanceScale,
  FaSquare,
  FaCheckSquare,
  FaStar,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { priceFormatter } from '../helpers';

const ListItem = ({ product }) => {
  const {
    images,
    name,
    price,
    inStock,
    type,
    isTopSeller,
    isOnSale,
    id,
    rating,
  } = product;

  const onSalePrice = price * 0.9;

  return (
    <article className="list-item">
      {isOnSale ? <div className="sale-sticker">On Sale!</div> : ''}
      {isTopSeller ? <div className="top-seller-sticker">Top Seller</div> : ''}

      <div className="img-container">
        <Link to={`/product/${id}`}>
          <img src={images[0]} alt={name} />
        </Link>
      </div>
      <div className="info-box">
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <div className="type-rating">
          <span>{type}</span>
          <span>
            {Array.from(Array(rating)).map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}

            <span className="rating-number">{rating}</span>
          </span>
        </div>
      </div>
      <div className="price-box">
        <div className="price">
          <h2>
            {isOnSale ? (
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
            {inStock ? (
              <FaCheckSquare className="stock-icon" />
            ) : (
              <FaSquare className="outfostock-icon" />
            )}
          </p>
        </div>
        <div className="controls">
          <FaBalanceScale className="control-icons" />
          <FaCartPlus className="control-icons" />
        </div>
      </div>
    </article>
  );
};

export default ListItem;
