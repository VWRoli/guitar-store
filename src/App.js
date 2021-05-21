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
import AdminLayout from './AdminLayout';
import PublicLayout from './PublicLayout';

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={PublicLayout} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
