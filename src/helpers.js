//Price formatter
export const priceFormatter = (price) => {
  //Locale
  const locale = navigator.language;
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'usd',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
  return formattedPrice;
};
