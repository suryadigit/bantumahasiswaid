import React from "react";

function Testimonials() {
    const testimonials = [
        { imgSrc: "https://via.placeholder.com/350", name: "Testimoni 1", text: "Testimoni 1" },
        { imgSrc: "https://via.placeholder.com/350", name: "Testimoni 2", text: "Testimoni 2" },
        { imgSrc: "https://via.placeholder.com/350", name: "Testimoni 3", text: "Testimoni 3" },
        { imgSrc: "https://via.placeholder.com/350", name: "Testimoni 4", text: "Testimoni 4" },
        { imgSrc: "https://via.placeholder.com/350", name: "Testimoni 5", text: "Testimoni 5" },
    ];

    return (
        <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-img" />
                        <div className="testimonial-content">
                            <p>{testimonial.text}</p>
                            <span>{testimonial.name}</span>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Testimonials;
