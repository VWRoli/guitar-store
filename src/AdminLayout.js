import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

//Pages
import AdminDashboard from './dashboard/AdminDashboard';

const AdminLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin" render={() => <AdminDashboard />} />
        {/* <Route exact path="/dashboard/personal" render={() => <Personal />} /> */}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default AdminLayout;
