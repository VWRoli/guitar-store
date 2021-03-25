import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Navbar from './components/Navbar';
import OnSale from './components/OnSale';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { ProductsProvider } from './components/Products/productContext';
//CSS
import './css/main.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar />
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
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
