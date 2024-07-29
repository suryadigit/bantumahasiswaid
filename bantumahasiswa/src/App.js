import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Selamat Datang di Bantumahasiswa</h1>
        <p>Platform untuk membantu mahasiswa dengan berbagai informasi dan layanan.</p>
        <img src="https://via.placeholder.com/200" alt="Landing" className="App-image" />
        <a href="#learn-more" className="App-button">Pelajari Lebih Lanjut</a>
      </header>
      <section id="learn-more" className="App-content">
        <h2>Tentang Kami</h2>
        <p>Kami menyediakan berbagai sumber daya dan bantuan untuk mahasiswa, termasuk informasi akademik, beasiswa, dan banyak lagi.</p>
      </section>
    </div>
  );
}

export default App;
