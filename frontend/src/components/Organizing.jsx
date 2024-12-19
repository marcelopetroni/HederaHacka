import React from 'react';
import './Organizing.sass';
import { useNavigate } from 'react-router-dom';

import TeenHackathonImage from '/images/teen-hackathon.png';
import UiUxHackathonImage from '/images/uiux-hackathon.png';

const Organizing = () => {
  const navigate = useNavigate();

  const handleOpenEvent = () => {
    navigate('/teen-hackathon');
  }

  const handleCreateEvent = () => {
    navigate('/new-event');
  };

  return (
    <div className="organizing-container">
      <h2 className="title">My Events</h2>

      <div className="organizing-cards-container">
        {/* Card 1 */}
        <div className="organizing-event-card" onClick={handleOpenEvent}>
          <img src={TeenHackathonImage} alt="Teen Hackathon" className="event-image" />
          <div className="event-details">
            <h3>Teen Hackathon</h3>
            <p>12/12/2024 - 16/12/2024</p>
            <p className="status ongoing">● Ongoing</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="organizing-event-card">
          <img src={UiUxHackathonImage} alt="UI/UX Hackathon" className="event-image" />
          <div className="event-details">
            <h3>UI/UX Hackathon: Designing the Future</h3>
            <p>01/09/2025 - 01/14/2025</p>
            <p className="status coming-soon">● Coming soon</p>
          </div>
        </div>

        {/* Botão para criar evento */}
        <div className="create-event-card" onClick={handleCreateEvent}>
          <div className="plus-icon">+</div>
          <p>Create New Event</p>
        </div>
      </div>
    </div>
  );
};

export default Organizing;
