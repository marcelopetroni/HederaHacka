import React from 'react'
import "./Achievements.styles.sass";

import Sidebar from '../../components/Sidebar.jsx';

const Achievements = () => {
  return (
    <div className='achievements-page'>
      <Sidebar />
      <div className='achievements-content'>
        <img src="../images/Oops.png" />
      </div>
    </div>
    
  )
}

export default Achievements