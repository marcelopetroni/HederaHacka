// src/assets/views/Overview/Overview.jsx
import React from 'react';
import './Home.styles.sass';

import Sidebar from '../../components/Sidebar.jsx';

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="home-content">
        <header>
          <h2>Hello, Peter!</h2>
          <nav>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#competing">Competing</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <h3>Oops, there's nothing here yet!</h3>
          {/* Conteúdo principal da página Overview */}
        </main>
      </div>
    </div>
  );
};

export default Home;
