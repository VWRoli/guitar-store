import { Route, Switch } from 'react-router-dom';

//Pages
import About from './components/About';
import Cart from './components/Cart/Cart';
import Compare from './components/Compare/Compare';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import OnSale from './components/OnSale';
import Products from './components/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import SingleProduct from './components/SingleProduct/SingleProduct';
import SuccessMessage from './components/SuccessMessage';

const PublicLayout = ({ match }) => {
  return (
    <>
      <Navbar />
      <SuccessMessage />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/products" render={() => <Products />} />
        <Route path="/product/:id" render={() => <SingleProduct />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/onsale" render={() => <OnSale />} />
        <Route path="/compare" render={() => <Compare />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicLayout;
