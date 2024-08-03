import React from 'react';

function Partner() {
    const partners = [
        { imgSrc: "favicon.ico", alt: "Partner 1" },
        { imgSrc: "wss.png", alt: "Partner 2" },
        { imgSrc: "favicon.ico", alt: "Partner 3" },
        { imgSrc: "wss.png", alt: "Partner 4" },
        { imgSrc: "favicon.ico", alt: "Partner 5" },
        { imgSrc: "wss.png", alt: "Partner 6" },
        { imgSrc: "favicon.ico", alt: "Partner 7" },
        { imgSrc: "wss.png", alt: "Partner 8" },
        { imgSrc: "favicon.ico", alt: "Partner 9" },
        { imgSrc: "wss.png", alt: "Partner 13" },
        { imgSrc: "favicon.ico", alt: "Partner 14" },
        { imgSrc: "wss.png", alt: "Partner 15" },
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
