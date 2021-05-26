import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

//Pages
import MainDashboard from './dashboard/MainDashboard';
import Header from './dashboard/Header';
import Products from './dashboard/Products';
import Sidebar from './dashboard/Sidebar/Sidebar';
import Customers from './dashboard/Customers';
import Orders from './dashboard/Orders';
import Stats from './dashboard/Stats';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/admin/main" render={() => <MainDashboard />} />
        <Route exact path="/admin/products" render={() => <Products />} />
        <Route exact path="/admin/orders" render={() => <Orders />} />
        <Route exact path="/admin/customers" render={() => <Customers />} />
        <Route exact path="/admin/stats" render={() => <Stats />} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default AdminLayout;
