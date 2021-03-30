import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) return null;

  return (
    <section className="slider-container">
      <button className="left-arrow" onClick={prevImage}>
        <FaArrowAltCircleLeft />
      </button>
      <button className="right-arrow" onClick={nextImage}>
        <FaArrowAltCircleRight />
      </button>

      <div className="single-img-container">
        {images.map((img, i) => (
          <div className={i === current ? 'slide active' : 'slide'} key={i}>
            {i === current && (
              <img src={img} alt="Product" className="single-img" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
