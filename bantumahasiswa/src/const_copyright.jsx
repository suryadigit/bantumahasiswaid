import React from "react";
import "./import/import.jsx";

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
};
function Hakcipta() {

    return (
        <div className="footer">
            <ul className="footer-nav">
                <li><a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'header')}>Beranda</a></li>
                <li><a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'layanan')}>Layanan</a></li>
                <li><a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'header')}>Blog</a></li>
                <li><a href="/" className="nav-link" onClick={(e) => handleNavClick(e, 'header')}>Bergabung</a></li>
            </ul>


            <h3>Sosial Media Kami</h3>
            <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/bantumahasiswaa/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <p>© 2021 BantuMahasiswa. All Rights Reserved.</p>
        </div >
    )
}

export default Hakcipta;