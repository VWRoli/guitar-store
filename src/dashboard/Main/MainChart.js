import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
];

const MainChart = () => {
  return (
    <div className="main-chart-container admin-group">
      <header className="admin-group-header">
        <h2>Income vs expanse for the last 7 days</h2>
      </header>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#5BC4ED" />
          <Bar dataKey="income" fill="#F09032" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MainChart;
