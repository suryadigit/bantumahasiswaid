import React, { useState } from 'react';
import './dashboard.css';
import Navbar from './navbar/Navbar.js';  

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);

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
      <Navbar /> {}
      <header className="App-header">
        <div className="App-header-wrapper">
          <img src="logo.png" alt="Landing" className="App-image" />
          <div className="App-header-text">
            <h1>Selamat Datang di <span className="highlight_second">Bantu</span><span className="highlight">Mahasiswa!</span></h1>
            <p>Platform untuk membantu mahasiswa dengan berbagai informasi dan layanan.</p>
            <p>Kami menyediakan berbagai sumber daya dan bantuan untuk mahasiswa, termasuk pembuatan web/aplikasi dan makalah/tugas, dan banyak lagi.</p>
            <div>
              <button className="App-more-button">Selengkapnya</button>
              <a
                href="#!"
                className={`App-help-button ${isLoading ? 'loading' : ''}`}
                onClick={handleHelpClick}
              >
                <span>Hubungi Kami <i className="fab fa-whatsapp"></i></span>
                <div className="spinner"></div>
              </a>
              <span>
                <img src="right-drawn-arrow.png" alt="Arrow" className="App-image-arrow" />
              </span>
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
