import ListItem from '../ListItem';
import { useGlobalContext } from '../../context';

const OnSaleList = () => {
  const { guitars } = useGlobalContext();

  const guitarsOnSale = guitars.filter((guitars) => guitars.isOnSale);

  return (
    <>
      <h2 className="list-title">Our Guitar Sales:</h2>
      <section className="list">
        {guitarsOnSale.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default OnSaleList;
