import React from 'react';
import { Link } from "react-router-dom";

const FeaturedSection = () => {
    const features = [
        { icon: 'flaticon-doctor-stethoscope', title: 'Medical Treatment', text: "Whether you're taking your first steps, just finding your stride,", delay: '0ms' },
        { icon: 'flaticon-ambulance-side-view', title: 'Emergency Help', text: "Whether you're taking your first steps, just finding your stride,", delay: '250ms' },
        { icon: 'fas fa-user-md', title: 'Qualified Doctors', text: "Whether you're taking your first steps, just finding your stride,", delay: '500ms' },
        { icon: 'fas fa-briefcase-medical', title: 'Medical Professionals', text: "Whether you're taking your first steps, just finding your stride,", delay: '750ms' }
    ];

    return (
        <section className="featured-section">
            <div className="auto-container">
                <div className="row clearfix">
                    {features.map((feature, index) => (
                        <div className="feature-block col-lg-3 col-md-6 col-sm-12" key={index}>
                            <div className={`inner-box wow fadeInLeft`} data-wow-delay={feature.delay} data-wow-duration="1500ms">
                                <div className="upper-box">
                                    <div className={`icon ${feature.icon}`}></div>
                                    <h3><Link to="#">{feature.title}</Link></h3>
                                </div>
                                <div className="text">{feature.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
