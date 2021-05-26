import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

//Pages
import MainDashboard from './dashboard/MainDashboard';
import Header from './dashboard/Header';
import Products from './dashboard/Products';
import Sidebar from './dashboard/Sidebar/Sidebar';
import Customers from './dashboard/Customers';
import Addresses from './dashboard/Addresses';
import Orders from './dashboard/Orders';
import Stats from './dashboard/Stats';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard" render={() => <MainDashboard />} />
        <Route exact path="/dashboard/products" render={() => <Products />} />
        <Route exact path="/dashboard/orders" render={() => <Orders />} />
        <Route exact path="/dashboard/customers" render={() => <Customers />} />
        <Route
          exact
          path="/dashboard/customers/addresses"
          render={() => <Addresses />}
        />
        <Route exact path="/dashboard/stats" render={() => <Stats />} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default AdminLayout;
