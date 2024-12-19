import React from 'react';
import './Dashboard.sass';

import Dashboard1 from '../assets/DashboardImage1.svg'
import Dashboard2 from  '../assets/DashboardImage2.svg'

const Dashboard = () => (
  <div className="dashboard">
    <img className='dashboard-images' src={Dashboard1} />
    <img className='dashboard-images' src={Dashboard2} />
  </div>
);

export default Dashboard;
