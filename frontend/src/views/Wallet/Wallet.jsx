import React from 'react'
import "./Wallet.styles.sass";

import Sidebar from '../../components/Sidebar.jsx';

const Wallet = () => {
  return (
    <div className='wallet-page'>
      <Sidebar />
      <div className='wallet-content'>Wallet</div>
    </div>
    
  )
}

export default Wallet