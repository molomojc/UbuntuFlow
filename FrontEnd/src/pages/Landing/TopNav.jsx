import React from 'react';
import { Link } from 'react-router-dom';
//import navigation
import { useNavigate } from "react-router-dom";



//import image from 
//import logo from '../../assets/Logo.png'; // Assuming you have a logo image

const Navbar = () => {

  const navigate = useNavigate();
  function handleStart(){
      navigate('/auth/sign-up');
  }

  return (
    <nav
      className="navbar"
      style={{
        background: 'linear-gradient(to right, #ffe6f0, #fff0f5)', 
        padding: '1rem 2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        borderRadius: '0 0 12px 12px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo and Brand */}
      <div
        className="logo-container"
        style={{ display: 'flex', alignItems: 'center' }}
      >
     <div
  className="header"
  style={{
    display: 'flex',
    alignItems: 'center',
  }}
>
  <div
    className="logo"
    style={{
      marginRight: '20px',
      transform: 'scale(1.2)',
      position: 'relative',
      top: '-6px', 
    }}
  >
    <img
      src="/img/Logo.png"
      alt="Decorative pattern"
      style={{ height: '40px', width: 'auto' }} 
    />
  </div>

  <div
    className="brand-name"
    style={{
      fontSize: '22px',
      fontWeight: '700',
      color: '#880E4F',
      fontFamily: 'Poppins, sans-serif',
    }}
  >
    UbuntuFlow
  </div>
</div>
</div>


      {/* Navigation Links */}
      <div
        className="nav-links"
        style={{
          display: 'flex',
          gap: '1.8rem',
          position: 'relative',
            left: '400px',
            fontFamily: 'Quicksand, sans-serif',
            fontWeight: '500',
            fontSize: '35px',
        }}
      >
        {['Home', 'About', 'Contact us'].map((text, idx) => (
          <Link
            key={idx}
            to={text === 'Home' ? '/' : `/${text.toLowerCase().replace(' ', '')}`}
            style={{
              textDecoration: 'none',
              color: '#444',
             
              fontSize: '20px',
              fontWeight: 'bold',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ff69b4')}
            onMouseOut={(e) => (e.target.style.color = '#444')}
          >
            {text}
          </Link>
        ))}
      </div>

      {/* Sign Up Button */}
      <button
        className="signup-btn"
        style={{
          backgroundColor: '#ff69b4',
          color: '880E4F',
          border: 'none',
          padding: '0.6rem 1.6rem',
          borderRadius: '999px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}
        onClick={handleStart}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#ff85c1';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#ff69b4';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;