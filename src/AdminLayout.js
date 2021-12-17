import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import MainDashboard from './dashboard/Main/MainDashboard';
import Header from './dashboard/Header/Header';
import Products from './dashboard/Products';
import Sidebar from './dashboard/Sidebar/Sidebar';
import Customers from './dashboard/Customers';
import Addresses from './dashboard/Addresses';
import Orders from './dashboard/Orders';
import Stats from './dashboard/Stats';
import ErrorPage from './components/ErrorPage';

const AdminLayout = () => {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  };

  return (
    <>
      <Header isExpanded={isExpanded} />
      <Sidebar handleToggler={handleToggler} isExpanded={isExpanded} />
      <div
        className={isExpanded ? 'admin-container' : 'admin-container collapsed'}
      >
        <Switch>
          <Route exact path="/dashboard" render={() => <MainDashboard />} />
          <Route exact path="/dashboard/products" render={() => <Products />} />
          <Route exact path="/dashboard/orders" render={() => <Orders />} />
          <Route
            exact
            path="/dashboard/customers"
            render={() => <Customers />}
          />
          <Route
            exact
            path="/dashboard/customers/addresses"
            render={() => <Addresses />}
          />
          <Route exact path="/dashboard/stats" render={() => <Stats />} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </>
  );
};

export default AdminLayout;
