import * as FaIcons from 'react-icons/fa';
import StatsCard from './StatsCard';
import { data } from './cardData';
import MainChart from './MainChart';
import TopSellers from './TopSellers';

const MainDashboard = () => {
  const visitors = {
    title: 'Visitors',
    count: 3556,
    dataRange: 'Last 30 days',
    icon: <FaIcons.FaEye />,
    bgColor: '#8862E0',
  };
  const orders = {
    title: 'Orders',
    count: 1257,
    dataRange: 'Last 30 days',
    icon: <FaIcons.FaShoppingCart />,
    bgColor: '#5AD795',
  };
  const users = {
    title: 'New Users',
    count: 127,
    dataRange: 'Last 7 days',
    icon: <FaIcons.FaUser />,
    bgColor: '#4C96F2',
  };
  const income = {
    title: 'Income',
    count: 14966,
    dataRange: 'Last 30 days',
    icon: <FaIcons.FaDollarSign />,
    bgColor: '#F2AF07',
  };

  return (
    <div className="main-dashboard">
      <h1 className="admin-welcome-title">Welcome back, Paige!</h1>
      <div className="stat-cards-container">
        <StatsCard data={data} props={visitors} />
        <StatsCard data={data} props={orders} />
        <StatsCard data={data} props={users} />
        <StatsCard data={data} props={income} />
      </div>
      <div className="admin-main-content-wrapper">
        <MainChart />
        <TopSellers />
      </div>
    </div>
  );
};

export default MainDashboard;
