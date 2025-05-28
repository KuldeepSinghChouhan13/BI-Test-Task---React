import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/' },
    
    
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">Covid-19</div>
      <ul className="sidebar-menu">
        {menuItems.map(item => (
          <li key={item.label} className="sidebar-item">
            <Link className='sidebar-label' to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

    
    </div>
  );
};

export default Sidebar;
