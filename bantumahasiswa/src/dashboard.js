import React, { useState } from 'react';
import Navbar from './navbar/Navbar.js';
import './import/allimport.js';

function Dashboard() {
  const handleHelpClick = (event, serviceText) => {
    event.preventDefault();
    setTimeout(() => {
      const message = `Halo Kak, Saya lagi butuh bantuan nih untuk ${serviceText}`;
      window.location.href = `https://wa.me/6282277266175?text=${encodeURIComponent(message)}`;
    }, 500);
  };

  const services = [
    { imgSrc: "image_services.png", alt: "Joki Skripsi",  text: "Joki Skripsi" },
    { imgSrc: "image_services1.png", alt: "Joki Aplikasi", text: "Joki Aplikasi" },
    { imgSrc: "image_services2.png", alt: "Joki Landing Page", text: "Joki Landing Page" },
    { imgSrc: "image_services3.png", alt: "Joki Tugas Kampus", text: "Joki Tugas Kampus" },
  ];
  return (
    <div className="App">
      <Navbar />
      <header id="header" className="App-header">
        <div className="App-header-wrapper">
          <img src="hi.png" alt="Landing" className="App-image" />
          <div className="App-header-text">
            <h1>Selamat Datang di <span className="highlight_second">Bantu</span><span className="highlight">Mahasiswa!</span></h1>
            <p>Platform untuk membantu mahasiswa dengan berbagai informasi dan layanan.</p>
            <p>Kami menyediakan berbagai sumber daya dan bantuan untuk mahasiswa, termasuk pembuatan web/aplikasi dan makalah/tugas, dan banyak lagi.</p>
            <div>
              <button className="App-more-button">Selengkapnya</button>
              <a
                href="#!"
                className="App-help-button" 
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

      <section id="layanan" className="App-content-services">
        <h2>Layanan Kami</h2>
        {services.map((service, index) => (
          <div key={index} className="item-shape">
            <img src={service.imgSrc} alt={service.alt} />
            <p>{service.text}</p>
              <a
                href="#!"
              className="App-hub-button" 
                onClick={(event) => handleHelpClick(event, service.text)}
              >
                <span>Hubungi Langsung <i className="fab fa-whatsapp"></i></span>
                </a>
          
          </div>
        ))}
      </section>
      

      <section id="kontak" className="App-content-contact">
        <h2>Kontak</h2>
      </section>
      <section id="tentang/kami" className="App-content-about">
        <h2>Tentang Kami</h2>
      </section>
      <section id="hakcipta" className="App-content-copyright">
        <h4>Copyright © 2024 BantuMahasiswa.</h4>
      </section>
    </div>
  );
}

export default Dashboard;
