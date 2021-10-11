import { FaStar } from 'react-icons/fa';

const Skeleton = () => {
  return (
    <article className="list-item" style={{ width: '350px' }}>
      <div className="img-container skeleton">
        <img src="" className="" />
      </div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton-text-container">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-star-icon"></div>
      </div>
      <div className="skeleton-price-container">
        <div className="skeleton skeleton-price"></div>
        <div className="skeleton-icon-wrapper">
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton skeleton-icon"></div>
        </div>
      </div>
    </article>
  );
};

export default Skeleton;
