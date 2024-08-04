import React from "react";
import Slider from "react-slick";

function Testimonials() {
    const testimonials = [
        { imgSrc: "wss.png", name: "Testimoni 1", text: "Testimoni 1" },
        { imgSrc: "wss.png", name: "Testimoni 2", text: "Testimoni 2" },
        { imgSrc: "wss.png", name: "Testimoni 3", text: "Testimoni 3" },
        { imgSrc: "wss.png", name: "Testimoni 4", text: "Testimoni 4" },
        { imgSrc: "wss.png", name: "Testimoni 5", text: "Testimoni 5" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="testimonials">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-img" />
                        <div className="testimonial-content">
                            <p>{testimonial.text}</p>
                            <span>{testimonial.name}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;
