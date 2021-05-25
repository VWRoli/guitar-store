import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

//Pages
import AdminDashboard from './dashboard/AdminDashboard';
import AdminProducts from './dashboard/AdminProducts';
import Header from './dashboard/Header';
import Sidebar from './dashboard/Sidebar/Sidebar';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/admin" render={() => <AdminDashboard />} />
        <Route exact path="/admin/products" render={() => <AdminProducts />} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default AdminLayout;
