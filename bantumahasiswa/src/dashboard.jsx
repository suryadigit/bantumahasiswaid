import React, { useEffect, useRef } from 'react';
import Navbar from './navbar/Navbar.jsx';
import Partner from './const_partner.jsx';
import Service from './const_services.jsx';
import Testimonials from './const_testimonials.jsx';
import 'slick-carousel/slick/slick.css';
import './import/import.jsx';

function Dashboard() {
  const handleHelpClick = (event, serviceText) => {
    event.preventDefault();
    setTimeout(() => {
      const message = `Halo Kak, Saya lagi butuh bantuan nih ${serviceText}`;
      window.location.href = `https://wa.me/6282277266175?text=${encodeURIComponent(message)}`;
    }, 500);
  };

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentNode.appendChild(clone);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header id="header" className="App-header">
        <div className="App-header-wrapper">
          <div className="oval"></div>
          <div className="banner"></div>
          <div className="banner-text">
            <span>100+ Project Completed</span>
            <div className="divider"></div>
            <span>20 Univ Berbeda</span>
            <div className="divider"></div>
            <span>10 Sekolah Berbeda</span>
          </div>
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
                onClick={(event) => handleHelpClick(event, 'sebelumnya konsultasi dulu yaa')}
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
        <Service handleHelpClick={handleHelpClick} />
      </section>

      <section id="kontak" className="App-content-contact">
        <h2>Kami Dipercaya oleh:</h2>
        <p>
          Dengan lebih dari 2 tahun pengalaman, kami telah bekerja sama dengan berbagai mitra terpercaya di berbagai industri. <br />
          Kepercayaan yang diberikan kepada kami adalah bukti komitmen kami terhadap kualitas dan profesionalisme. Kami terus berinovasi dan memberikan layanan terbaik untuk memenuhi kebutuhan dan harapan para mitra kami.
        </p>
        <div className="marquee" ref={marqueeRef}>
          <div className="marquee-content">
            <Partner />
          </div>
        </div>
        <br />
        <h2>Testimoni dari para pelanggan kami</h2>
        <Testimonials />
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
