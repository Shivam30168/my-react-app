import React from 'react';
import { BsCurrencyExchange, BsFillGrid3X3GapFill, BsWallet, BsFillBagFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Pie,PieChart, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  const data = [
    {
      name: 'J',
      uv: 4000,  
    },
    {
      name: 'F',
      uv: 3000,     
    },
    {
      name: 'M',
      uv: 2000,
    },
    {
      name: 'Ap',
      uv: 2780,
    },
    {
      name: 'Ma',
      uv: 1890,
    },
    {
      name: 'Ju',
      uv: 2390,
    },
    {
      name: 'Ju',
      uv: 3790,
    },
    {
      name: 'Au',
      uv: 3690,
    },
    {
      name: 'Se',
      uv: 3400,
    },
    {
      name: 'Oc',
      uv: 3300,
    },
    {
      name: 'No',
      uv: 3190,
    },
    {
      name: 'De',
      uv: 3290,
    }
  ];
  const datapie = [
    { name: 'New Customer', value: 200 },
    { name: 'Old Customer', value: 300 },
    
  ];

  return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Earnings</h3>
            <BsCurrencyExchange className='card_icon' />
          </div>
          <h1>$198k</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Orders</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>$2.4k</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Balance</h3>
            <BsWallet className='card_icon' />
          </div>
          <h1>$2.4k</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Sales</h3>
            <BsFillBagFill className='card_icon' />
          </div>
          <h1>$89k</h1>
        </div>
      </div>

      <div className='charts'>
        <div className='chart-box'>
          <h3>Overview</h3>
          <h6>Monthly Earninng</h6>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />            
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='chart-box'>
  <h3>Customers</h3>
  <h6>Customer that buy products</h6>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie data={datapie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#1b88e0" label />     
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>

        </div>
     
    </main>
  );
}

export default Home;
