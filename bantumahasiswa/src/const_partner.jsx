import React from 'react';

function Partner() {
    
    const partners = [
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 1" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 2" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 3" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 4" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 5" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 6" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 7" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 8" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 9" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 13" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 14" },
        { imgSrc: "https://via.placeholder.com/350", alt: "Partner 15" },
    ];

    return (
        <div className="partners">
            {partners.map((partner, index) => (
                <img key={index} src={partner.imgSrc} alt={partner.alt} className="partner-logo" />
            ))}
        </div>
    );
}

export default Partner;
