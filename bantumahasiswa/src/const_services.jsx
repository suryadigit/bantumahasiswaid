import React from "react";

function Service({ handleHelpClick }) {
    const services = [
        { imgSrc: "https://via.placeholder.com/350", alt: "Joki Skripsi", title: "Joki Skripsi", promo: 'Diskon 15%' },
        { imgSrc: "https://via.placeholder.com/350", alt: "Joki Aplikasi", title: "Joki Aplikasi", promo: 'Diskon 25%' },
        { imgSrc: "https://via.placeholder.com/350", alt: "Joki Website Landing", title: "Joki Website Landing", promo: 'Diskon 15%' },
        { imgSrc: "https://via.placeholder.com/350", alt: "Joki Tugas Kampus", title: "Joki Tugas Kampus", promo: 'Diskon 10%' },
    ];

    return (
        <>
            {services.map((service, index) => (
                <div key={index} className="item-shape">
                    <div className="promo">{service.promo}</div>
                    <div className="title">{service.title}</div>
                    <hr className="divider" />
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
        </>
    );
}

export default Service;
