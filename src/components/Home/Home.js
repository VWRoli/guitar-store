import ListContainer from './ListContainer';

const Home = () => {
  return (
    <>
      <section id="hero">
        <div className="main-banner">
          <h1>Crazy Deals!</h1>
          <h2>Best prices on the internet</h2>
        </div>
      </section>
      <section>
        <ListContainer />
      </section>
    </>
  );
};

export default Home;
