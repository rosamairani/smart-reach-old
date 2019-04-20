
import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Visits: 2200, Campaigns: 3400 },
  { name: 'Tue', Visits: 1280, Campaigns: 2398 },
  { name: 'Wed', Visits: 5000, Campaigns: 4300 },
  { name: 'Thu', Visits: 4780, Campaigns: 2908 },
  { name: 'Fri', Visits: 5890, Campaigns: 4800 },
  { name: 'Sat', Visits: 4390, Campaigns: 3800 },
  { name: 'Sun', Visits: 4490, Campaigns: 4300 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Visits" stroke="#EC1E79" />
        <Line type="monotone" dataKey="Campaigns" stroke="#1B98B5" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;