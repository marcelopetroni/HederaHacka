import React from 'react';
import './EventSettings.sass';

import CalendarIcon from '../assets/CalendarIcon.svg'
import PencilIcon from '../assets/PencilIcon.svg'
import GuidelinesIcon from '../assets/GuidelinesIcon.svg'

const EventSettings = () => (
  <div className="event-settings">
<div className="create-event-container">
    <div className="event-info">
      <div className='event-input'>
        <input type="text" placeholder="Teen Hackathon" />
        <img src={PencilIcon} />
      </div> 
        <div className="event-input">
        <img src={CalendarIcon} />
        <input type="text" placeholder="12/12/2024 - 16/12/2024" />
        <img src={PencilIcon} />
        </div>
    </div>

    {/* Descrição */}
    <div className='text-area-input'>
    <textarea placeholder="Welcome to Teen Hackathon, the ultimate event for the next generation of tech trailblazers! This 4 days hackathon is designed exclusively for teenagers passionate about technology, creativity, and problem-solving. Whether you're a coding prodigy, a design wizard, or just starting your tech journey, Teen Hackathon is the perfect opportunity to showcase your skills, learn new ones, and make lifelong connections." className="textarea"></textarea>
    <div className='pencil-icon'>
    <img src={PencilIcon} />
    </div>
    </div>

    {/* Filtros */}
    <div className="filters">
      <div className="filter-container">
        <strong>Filters:</strong>
        <div className="filter-options">
        <p>The event format is: 
            <label><input type="radio" name="format" checked /> Online</label>
            <label><input type="radio" name="format" /> In-person</label>
            <label><input type="radio" name="format" /> Hybrid</label>
        </p>
        <p>Is project submission required?
          <label><input type="radio" name="submission" checked /> Yes</label>
          <label><input type="radio" name="submission" /> No</label>
        </p>
        <p>Will there be prizes? 
            <label><input type="radio" name="prizes" checked /> Yes</label>
            <label><input type="radio" name="prizes" /> No</label>
        </p>
        <p>What is the theme? <input type="text" placeholder='Hackathon' className="input-text" /></p>
        <p>Country/region: 
            <select>
            <option>USA</option>
            <option>Brazil</option>
            <option>Canada</option>
            </select>
        </p>
        </div>
        </div>
        {/* Upload Guidelines */}
      <div className="upload-guidelines">
          <div className="upload-placeholder">
            <img src={GuidelinesIcon} alt="" />
          </div>
      </div>
    </div>

    
    {/* Botões */}
    <div className="buttons">
        <button className="add-section">Add Section</button>
        <button className="create-event">Save Changes</button>
    </div>
  </div>
</div>
);

export default EventSettings;
