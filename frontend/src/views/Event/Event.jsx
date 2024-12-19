import React, { useState } from "react";
import './Event.styles.sass';
import { useNavigate } from 'react-router-dom';

import Sidebar from "../../components/Sidebar";
import ArrowDown from '../../assets/ArrowDown.svg';
import ArrowLeft from '../../assets/ArrowLeft.svg';

import Description from '../../components/Description';
import MentorshipScheduling from '../../components/MentorshipScheduling';
import ProjectSubmission from '../../components/ProjectSubmission';
import ResultsAndAwards from '../../components/ResultsAndRewards';

const Event = () => {

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate('/home');
  }

  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <Description />;
      case 'mentorship':
        return <MentorshipScheduling />;
      case 'submission':
        return <ProjectSubmission />;
      case 'results':
        return <ResultsAndAwards />;
      default:
        return <Description />;
    }
  };

  return (
    <div className='event-page'>
      <Sidebar />
      <div className="event-page-container">
        <div className='header-text-container'>
          <h2>Hello, Peter!</h2>
          <div className='my-account-button'>
            <button className='my-account-text'>My account</button>
            <img src={ArrowDown} alt='Arrow Down' className='icon'/>
          </div>
        </div> 

        <a className="return-button" onClick={handleReturn}>
          <img src={ArrowLeft} />
          <p>Return</p>
        </a>
        <div className="event-banner">
          <img src="/images/event-large-2.png" alt="Event Banner" />
        </div>

        <h2 className="event-title">Hedera Hello Future Hackathon 2.0</h2>

        <div className="event-tabs">
          <button 
            className={`tab-button ${activeTab === 'description' ? 'active' : ''}`} 
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`tab-button ${activeTab === 'mentorship' ? 'active' : ''}`} 
            onClick={() => setActiveTab('mentorship')}
          >
            Mentorship Scheduling
          </button>
          <button 
            className={`tab-button ${activeTab === 'submission' ? 'active' : ''}`} 
            onClick={() => setActiveTab('submission')}
          >
            Project Submission
          </button>
          <button 
            className={`tab-button ${activeTab === 'results' ? 'active' : ''}`} 
            onClick={() => setActiveTab('results')}
          >
            Results and Rewards
          </button>
        </div>

        <div className="event-content">
          {renderContent()}
        </div>
      </div> 
    </div>  
  );
};

export default Event;
