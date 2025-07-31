import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BottomNav from './Components/BottomNav';
import './styles/variables.css';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main style={{ padding: '2rem', paddingBottom: '4rem' }}>
      {children}
    </main>
    <Footer />
    <BottomNav />
  </div>
);

export default Layout;
