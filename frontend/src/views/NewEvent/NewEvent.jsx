import React, { useState } from "react";
import './NewEvent.styles.sass';

import { useNavigate } from 'react-router-dom';

import Sidebar from "../../components/Sidebar";
import ArrowDown from '../../assets/ArrowDown.svg';
import ArrowLeft from '../../assets/ArrowLeft.svg';
import CalendarIcon from "../../assets/CalendarIcon.svg";

const NewEvent = () => {

  const navigate = useNavigate();
    const handleReturn = () => {
      navigate('/home');
    }

  return (
    <div className='new-event-page'>
      <Sidebar />
      <div className="new-event-page-container">
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

        <div className="create-event-container">
            <h2 className="title">Create New Event</h2>

            <div className="upload-image">
                <div className="upload-placeholder">
                <span className="plus-icon">+</span>
                <p>Click here to add your event image</p>
                </div>
            </div>

            <div className="event-info">
                <input type="text" placeholder="Enter event name" className="input-text" />
                <div className="event-date">
                <img src={CalendarIcon} />
                <input type="text" placeholder="Event Date" />
                </div>
            </div>

            <textarea placeholder="Briefly describe your event" className="textarea"></textarea>

            <div className="filters">
              <div className="filter-container">
                <strong>Filters:</strong>
                <div className="filter-options">
                <p>The event format is: 
                    <label><input type="radio" name="format" /> Online</label>
                    <label><input type="radio" name="format" /> In-person</label>
                    <label><input type="radio" name="format" /> Hybrid</label>
                </p>
                <p>Will there be prizes? 
                    <label><input type="radio" name="prizes" /> Yes</label>
                    <label><input type="radio" name="prizes" /> No</label>
                </p>
                <p>What is the theme? <input type="text" className="input-text" /></p>
                <p>Country/region: 
                    <select>
                    <option>Please select</option>
                    <option>USA</option>
                    <option>Brazil</option>
                    <option>Canada</option>
                    </select>
                </p>
                </div>
                </div>
              <div className="upload-guidelines">
                  <div className="upload-placeholder">
                  <span className="upload-icon">⬆</span>
                  <p>Click here to add the Guidelines</p>
                  </div>
              </div>
            </div>

            <div className="buttons">
                <button className="add-section">Add Section</button>
                <button className="create-event">Create Event</button>
            </div>
        </div>
      </div>

     
    </div>  
  );
};

export default NewEvent;
