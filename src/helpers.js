import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

//Price formatter
export const priceFormatter = (price) => {
  //Locale
  const locale = navigator.language;
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'eur',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
  return formattedPrice;
};

//Filter products
export const filterProducts = (products, category, condition) => {
  return products.filter(
    (product) => product.category === category && product[condition]
  );
};

//Calculate on sale prices
export const calcOnSale = (amount) => {
  return amount * 0.9;
};

//Slider next arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronCircleRight
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#424242',
      }}
      onClick={onClick}
    />
  );
}

//Slider prev arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronCircleLeft
      className={className}
      style={{ ...style, display: 'block', color: '#424242' }}
      onClick={onClick}
    />
  );
}
//Slider settings
export const settings = {
  infinite: false,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
