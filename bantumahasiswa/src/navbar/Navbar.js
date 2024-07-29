import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="App-navbar">
            <div className="App-logo">
                <span className="highlight_second">Bantu</span><span className="highlight">Mahasiswa</span>
            </div>
            <button
                className={`App-hamburger ${isOpen ? 'open' : ''}`}
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
            >
                <div></div>
                <div></div>
                <div></div>
            </button>
            <ul className={`App-nav ${isOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <a href="/home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Layanan</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Kontak</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">Tentang Kami</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
