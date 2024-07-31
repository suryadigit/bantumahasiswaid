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
    { imgSrc: "image_services.png", alt: "Joki Skripsi",  title: "Joki Skripsi", promo:'Disc 75% OFF' },
    { imgSrc: "image_services1.png", alt: "Joki Aplikasi", title: "Joki Aplikasi", promo: 'Disc 25% OFF'  },
    { imgSrc: "image_services2.png", alt: "Joki Website Landing", title: "Joki Website Landing", promo: 'Disc 95% OFF' },
    { imgSrc: "image_services3.png", alt: "Joki Tugas Kampus", title: "Joki Tugas Kampus", promo: 'Disc 10% OFF' },
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
                onClick={(event)=>{ handleHelpClick(event, services.message) }}
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
        <h2>Layanan Joki Indonesia Termurah Harga Terjangkau</h2>
        <p>
          Kami menyediakan berbagai layanan untuk setiap kebutuhan anda.<br />
          Tim kami terdiri dari profesional yang berpengalaman dalam bidang masing-masing.<br />
          Harga yang kami tawarkan sangat kompetitif dan terjangkau untuk semua kalangan mahasiswa.
        </p>
        {services.map((service, index) => (
          <div key={index} className="item-shape">
            <div className="promo">{service.promo}</div>
            <div className="title">{service.title}</div>
            <hr className="divider"/>
            <img src={service.imgSrc} alt={service.alt} />
              <a
                href="#!"
              className="App-hub-button" 
                onClick={(event) => handleHelpClick(event, service.title)}
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
