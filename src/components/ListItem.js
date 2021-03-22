import {
  FaCartPlus,
  FaBalanceScale,
  FaSquare,
  FaCheckSquare,
} from 'react-icons/fa';
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
  } = product;
  return (
    <article className="list-item">
      <div className="img-container">
        <img src={images[0]} alt={name} />
      </div>
      <div className="info-box">
        <h3>{name}</h3>
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
