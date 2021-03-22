import {
  FaCartPlus,
  FaBalanceScale,
  FaSquare,
  FaCheckSquare,
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
    is_top_seller,
    isOnSale,
    id,
  } = product;
  return (
    <article className="list-item">
      {isOnSale ? <div className="sale-sticker">On Sale!</div> : ''}

      <div className="img-container">
        <Link to={`/product/${id}`}>
          <img src={images[0]} alt={name} />
        </Link>
      </div>
      <div className="info-box">
        <h3>
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        <p>{type}</p>
      </div>
      <div className="price-box">
        <div className="price">
          <h2>{priceFormatter(price)}</h2>
          <p>In Stock: {inStock ? <FaSquare /> : <FaCheckSquare />}</p>
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
