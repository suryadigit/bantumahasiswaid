import React from 'react';

function Partner() {
    const partners = [
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner1", alt: "Partner 1" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner2", alt: "Partner 2" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner3", alt: "Partner 3" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner4", alt: "Partner 4" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner5", alt: "Partner 5" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner6", alt: "Partner 6" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner7", alt: "Partner 7" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner8", alt: "Partner 8" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner9", alt: "Partner 9" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner10", alt: "Partner 10" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner11", alt: "Partner 11" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner12", alt: "Partner 12" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner13", alt: "Partner 13" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner14", alt: "Partner 14" },
        { imgSrc: "https://via.placeholder.com/100x50?text=Partner15", alt: "Partner 15" },
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
