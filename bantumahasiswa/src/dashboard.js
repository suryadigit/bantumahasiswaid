import React, { useState } from 'react';
import './App.css';

function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleHelpClick = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const message = "Halo Admin, Saya lagi butuh bantuan nih, bisa tolong bantu saya?";
      window.location.href = `https://wa.me/6282277266175?text=${encodeURIComponent(message)}`;
    }, 500);  
  };

  return (
    <div className="App">
      <nav className="App-navbar">
        <div className="App-logo"><span className="highlight_second">Bantu</span><span className="highlight">mahasiswa</span></div>
        <button className="App-hamburger" onClick={toggleNav}>
          &#9776;
        </button>
        <ul className={`App-nav ${isNavOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Tentang Kami</a></li>
          <li><a href="#services">Layanan</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <div className="App-header-wrapper">
          <img src="logo.png" alt="Landing" className="App-image" />
          <div className="App-header-text">
            <h1>Selamat Datang di <span className="highlight_second">Bantu</span><span className="highlight">Mahasiswa</span></h1>
            <p>Platform untuk membantu mahasiswa dengan berbagai informasi dan layanan.</p>
            <p>Kami menyediakan berbagai sumber daya dan bantuan untuk mahasiswa, termasuk pembuatan web/aplikasi dan makalah/tugas, dan banyak lagi.</p>
            <div>
              <button className="App-more-button">Selengkapnya</button>
              <a
                href="#!"
                className={`App-help-button ${isLoading ? 'loading' : ''}`}
                onClick={handleHelpClick}
              >
                <span>Minta Bantuan</span>
                <div className="spinner"></div>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section id="learn-more" className="App-content">
        <h2>Kategori</h2>
        <p>Kami menyediakan berbagai sumber daya dan bantuan untuk mahasiswa, termasuk informasi akademik, beasiswa, dan banyak lagi.</p>
      </section>
    </div>
  );
}

export default Dashboard;
