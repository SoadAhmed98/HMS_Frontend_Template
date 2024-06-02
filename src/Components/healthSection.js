import React from 'react';
import { Link } from 'react-router-dom';

const HealthSection = () => {
    return (
        <section className="health-section">
            <div className="auto-container">
                <div className="inner-container">
                    
                    <div className="row clearfix">
                        
                        {/* Content Column */}
                        <div className="content-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="border-line"></div>
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <h2>Who We Are <br /> Pioneering in Health.</h2>
                                    <div className="separator"></div>
                                </div>
                                <div className="text">Where you are at the heart of our mission. We hope you will consider us as your medical home—the place where you feel safe, comfortable and cared for. As a multi-specialty medical group,</div>
                                <Link to="about.html" className="theme-btn btn-style-one"><span className="txt">More About Us</span></Link>
                            </div>
                        </div>
                        
                        {/* Image Column */}
                        <div className="image-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src="images/resource/image-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default HealthSection;
