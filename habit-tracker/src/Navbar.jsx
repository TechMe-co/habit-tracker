import React from 'react';
import './Navbar.css'; 
import logo from '/logo.png'; 
import './Navbar.css'

const Navbar = ({ onLogout }) => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <button className="logout-button" onClick={onLogout}>
                Logout
            </button>
        </nav>
    );
};

export default Navbar;