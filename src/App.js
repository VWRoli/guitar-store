import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './css/main.min.css';

//Pages
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import OnSale from './components/OnSale';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Compare from './components/Compare/Compare';
//Components
import Navbar from './components/Navbar/Navbar';
import SuccessMessage from './components/SuccessMessage';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className='App'>
        <Navbar />
        <SuccessMessage />
        <ScrollToTop />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/product/:id'>
            <SingleProduct />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/onsale'>
            <OnSale />
          </Route>
          <Route path='/compare'>
            <Compare />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
