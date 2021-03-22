import OnSaleList from './OnSaleList';

const Home = () => {
  return (
    <>
      <section id="hero">
        <div className="deals">
          <h1>Crazy Deals!</h1>
          <h2>Best prices on the internet</h2>
        </div>
      </section>
      <section>
        <OnSaleList />
      </section>
    </>
  );
};

export default Home;
