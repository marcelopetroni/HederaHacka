import React, { useState } from "react";
import './TeenHackathon.styles.sass';

import { useNavigate } from 'react-router-dom';

import Sidebar from "../../components/Sidebar";
import ArrowDown from '../../assets/ArrowDown.svg';
import ArrowLeft from '../../assets/ArrowLeft.svg';

import Dashboard from '../../components/Dashboard';
import ParticipantsAndProjects from '../../components/ParticipantsAndProjects';
import Prizes from '../../components/Prizes';
import EventSettings from '../../components/EventSettings';

const TeenHackathon = () => {

  const navigate = useNavigate();
    const handleReturn = () => {
      navigate('/home');
    }

  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'participants':
        return <ParticipantsAndProjects />;
      case 'prizes':
        return <Prizes />;
      case 'event':
        return <EventSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='event-page'>
      <Sidebar />
      <div className="event-page-container">
        {/* Cabeçalho */}
        <div className='header-text-container'>
          <h2>Hello, Peter!</h2>
          <div className='my-account-button'>
            <button className='my-account-text'>My account</button>
            <img src={ArrowDown} alt='Arrow Down' className='icon'/>
          </div>
        </div> 

        {/* Imagem do evento */}
        <a className="return-button" onClick={handleReturn}>
          <img src={ArrowLeft} />
          <p>Return</p>
        </a>
        <div className="event-banner">
          <img src="/images/teen-hackathon-large.png" alt="Event Banner" />
        </div>

        {/* Título */}
        <h2 className="event-title">Teen Hackathon - 12/12/2024 - 16/12/2024</h2>

        {/* Navegação de Abas */}
        <div className="event-tabs">
          <button 
            className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dashborad')}
          >
            Dashboard
          </button>
          <button 
            className={`tab-button ${activeTab === 'participants' ? 'active' : ''}`} 
            onClick={() => setActiveTab('participants')}
          >
            Participants and Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'prizes' ? 'active' : ''}`} 
            onClick={() => setActiveTab('prizes')}
          >
            Prizes
          </button>
          <button 
            className={`tab-button ${activeTab === 'event' ? 'active' : ''}`} 
            onClick={() => setActiveTab('event')}
          >
            Event Settings
          </button>
        </div>

        {/* Conteúdo das Abas */}
        <div className="event-content">
          {renderContent()}
        </div>
      </div> 
    </div>  
  );
};

export default TeenHackathon;
