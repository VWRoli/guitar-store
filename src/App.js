import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './css/main.min.css';

//Pages
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Navbar from './components/Navbar';
import OnSale from './components/OnSale';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { ProductsProvider } from './components/Products/productContext';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Cart/cartContext';
import Compare from './components/Compare';
import SuccessMessage from './components/SuccessMessage';

function App() {
  return (
    <Router>
      <CartProvider>
        <main className="App">
          <Navbar />
          <SuccessMessage />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <ProductsProvider>
                <Products />
              </ProductsProvider>
            </Route>
            <Route path="/product/:id">
              <SingleProduct />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/onsale">
              <OnSale />
            </Route>
            <Route path="/compare">
              <Compare />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>

          <Footer />
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
