import { AreaChart, ResponsiveContainer, Area } from 'recharts';

const StatsCard = ({ data, props }) => {
  const { title, count, dataRange, bgColor, icon } = props;

  return (
    <article className="card-wrapper" style={{ backgroundColor: `${bgColor}` }}>
      <header>
        <div className="card-header-data">
          <h2>{title}</h2>
          <h1>{count}</h1>
          <p>{dataRange}</p>
        </div>
        <div className="card-icon-wrapper" style={{ color: `${bgColor}` }}>
          {icon}
        </div>
      </header>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#fff" stopOpacity={0.8} />
                <stop offset="85%" stopColor={bgColor} stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#fff"
              strokeWidth={1}
              fill="url(#priceGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
};

export default StatsCard;
