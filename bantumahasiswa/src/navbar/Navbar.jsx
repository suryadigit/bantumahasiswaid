import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        if (targetId === 'header') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        closeNavbar();
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
                    <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'header')}>Beranda</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'layanan')}>Layanan</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'kontak')}>Bekerja Sama</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'tentang/kami')}>Tentang Kami</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
