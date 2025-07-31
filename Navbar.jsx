import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <nav className="glass" style={{ padding: '1rem' }}>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    <ThemeToggle />
  </nav>
);

export default Navbar;
