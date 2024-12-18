// src/views/HomePage.jsx
import React, { useState } from 'react';
import './Home.styles.sass';

import ArrowDown from '../../assets/ArrowDown.svg'

import Overview from '../../components/Overview.jsx'
import Competing from '../../components/Competing.jsx'
import Mentoring from '../../components/Mentoring.jsx'
import Judging from '../../components/Judging.jsx'
import Organizing from '../../components/Organizing.jsx'

import Sidebar from '../../components/Sidebar.jsx'

function HomePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'competing':
        return <Competing />;
      case 'mentoring':
        return <Mentoring />;
      case 'judging':
        return <Judging />;
      case 'organizing':
        return <Organizing />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className='home-page'>
      <Sidebar />
      <div className="home-page-container">
        <header className="home-page-container-header">
          <div className='header-text-container'>
            <h2>Hello, Peter!</h2>
            <div className='my-account-button'>
              <button className='my-account-text'>My account</button>
              <img src={ArrowDown} alt='Arrow Down' className='icon'/>
            </div>
          </div>
          <nav className="home-page-container-nav">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'competing' ? 'active' : ''}`}
              onClick={() => setActiveTab('competing')}
            >
              Competing
            </button>
            <button 
              className={`tab-button ${activeTab === 'mentoring' ? 'active' : ''}`}
              onClick={() => setActiveTab('mentoring')}
            >
              Mentoring
            </button>
            <button 
              className={`tab-button ${activeTab === 'judging' ? 'active' : ''}`}
              onClick={() => setActiveTab('judging')}
            >
              Judging
            </button>
            <button 
              className={`tab-button ${activeTab === 'organizing' ? 'active' : ''}`}
              onClick={() => setActiveTab('organizing')}
            >
              Organizing
            </button>
          </nav>
        </header>

        <main className="home-page-container-content">
          { renderContent() }
        </main>
      </div>
    </div>
  );
}

export default HomePage;
