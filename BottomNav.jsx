import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => (
  <div className="bottom-nav">
    <NavLink to="/" className="nav-item">Home</NavLink>
    <NavLink to="/player" className="nav-item">MP3</NavLink>
    <NavLink to="/library" className="nav-item">Library</NavLink>
    <NavLink to="/playlists" className="nav-item">Playlists</NavLink>
    <NavLink to="/account" className="nav-item">Account</NavLink>
  </div>
);

export default BottomNav;
