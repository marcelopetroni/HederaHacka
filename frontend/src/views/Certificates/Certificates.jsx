import React from 'react'
import "./Certificates.styles.sass";

import Sidebar from '../../components/Sidebar.jsx';

const Certificates = () => {
  return (
    <div className='certificates-page'>
      <Sidebar />
      <div className='certificates-content'>Certificates</div>
    </div>
    
  )
}

export default Certificates