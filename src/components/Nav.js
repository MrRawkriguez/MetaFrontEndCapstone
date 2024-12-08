import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <section className='logo'>
                <Link to="/">
                    <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
                </Link>
            </section>
            <div className='menu' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/Chicago" onClick={closeMenu}>About</Link></li>
                <li><Link to="/" onClick={closeMenu}>Services</Link></li>
                <li><Link to="/specials" onClick={closeMenu}>Menu</Link></li>
                <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
                <li><Link to="/" onClick={closeMenu}>Order Online</Link></li>
                <li><Link to="/" onClick={closeMenu}>Hello, John Doe</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;






