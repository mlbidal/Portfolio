import React from 'react';
import './Navbar.css';

const Navbar = ({isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({top:0, left:0, bhavior:'smooth'});
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
        <div className='navbarLogo' onClick={toTheTop}>Hi, I'm Lu!</div>
    </nav>
  )
}

export default Navbar