import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Overview.styles.sass';

import SearchIcon from '../assets/SearchIcon.svg'

const Overview = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="events-page">
      {/* Search Section */}
      <section className="search-section">
        <h2>Search events</h2>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <img className='search-button' src={SearchIcon} alt='Search Icon' />
        </div>
        <div className="filters">
          <button>Country</button>
          <button>Theme</button>
          <button>Rewards</button>
          <button>Format</button>
        </div>
      </section>

      {/* On Going Section */}
      <section className="ongoing-events">
        <h3>On going</h3>
        <div className="event-cards">
          <div className="event-card" style={{ backgroundImage: "url('/images/event1.png')" }}>
          </div>
          <div className="event-card" style={{ backgroundImage: "url('/images/event2.png')" }}>
          </div>
          <div className="event-card" style={{ backgroundImage: "url('/images/event3.png')" }}>
          </div>
        </div>
      </section>

      {/* Next Events Section */}
      <section className="next-events">
        <h3>Next events</h3>
        <div className="next-events-container">
          <div className="calendar">
            <Calendar 
            onChange={setDate} 
            value={date} 
            locale='en-US'
            />
          </div>
          <div className="large-event-card" style={{ backgroundImage: "url('/images/event-large.png')" }}>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
