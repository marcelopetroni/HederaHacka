import React from 'react';
import './Sidebar.sass';
// Importe NavLink do React Router
import { NavLink } from 'react-router-dom';

import Logo from '../assets/SkillsphereLogo.svg'
import HomeIcon from '../assets/HomeIcon.svg'
import WalletIcon from '../assets/WalletIcon.svg'
import CertificatesIcon from '../assets/CertificatesIcon.svg'
import AchievementsIcon from '../assets/AchievementsIcon.svg'
import LogoutIcon from '../assets/LogoutIcon.svg'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="Skill Sphere Logo" />
      </div>

      <nav className="sidebar__menu">
        <ul>
          <li>
            <NavLink to="/overview" className="menu-link">
              <img src={HomeIcon} alt='HomeIcon' className='icon' />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" className="menu-link">
              <img src={WalletIcon} alt='WalletIcon' className='icon' />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" className="menu-link">
              <img src={CertificatesIcon} alt='CertificatesIcon' className='icon' />
              Certificates
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements" className="menu-link">
              <img src={AchievementsIcon} alt='AchievementsIcon' className='icon' />
              Achievements
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar__logout">
        <NavLink to="/" className="menu-link">
          <img src={LogoutIcon} alt='LogoutIcon' className='icon' />
          Log out
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
