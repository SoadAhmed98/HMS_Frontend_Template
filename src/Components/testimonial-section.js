import React from 'react';

const testimonials = [
    {
        text: "Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!",
        author: {
            name: "Max Winchester",
            designation: "Kidney Patient",
            image: "images/resource/author-1.jpg"
        }
    },
    {
        text: "Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!",
        author: {
            name: "Max Winchester",
            designation: "Kidney Patient",
            image: "images/resource/author-2.jpg"
        }
    },
    {
        text: "Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!",
        author: {
            name: "Max Winchester",
            designation: "Kidney Patient",
            image: "images/resource/author-3.jpg"
        }
    },
];

const TestimonialSection = () => {
    return (
        <section className="testimonial-section style-two">
            <div className="auto-container">
                <div className="sec-title centered">
                    <h2>What Patients Are Saying</h2>
                    <div className="separator"></div>
                </div>
                <div className="testimonial-outer" style={{ backgroundImage: 'url(images/background/pattern-4.png)' }}>
                    <div className="client-testimonial-carousel owl-carousel owl-theme">
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial-block" key={index}>
                                <div className="inner-box">
                                    <div className="quote-icon flaticon-quote"></div>
                                    <div className="text">{testimonial.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="client-thumb-outer">
                        <div className="client-thumbs-carousel owl-carousel owl-theme">
                            {testimonials.map((testimonial, index) => (
                                <div className="thumb-item" key={index}>
                                    <figure className="thumb-box">
                                        <img src={testimonial.author.image} alt={testimonial.author.name} />
                                    </figure>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.author.name}</div>
                                        <div className="designation">{testimonial.author.designation}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
