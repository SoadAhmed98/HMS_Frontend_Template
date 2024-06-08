import React from 'react';

const PioneeringHealth = () => {
    return (
        <>
            {/* Fluid Section One */}
            <section className="fluid-section-one mb-5">
                <div className="outer-section clearfix">
                    {/* Image Column */}
                    <div className="image-column" style={{ backgroundImage: "" }}>
                        <div className="wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <img src="images/article1.jpg" alt="" style={{paddingLeft:"1rem",paddingTop:"3.2rem",width:"50rem"}}/>
                        </div>
                    </div>
                    {/* End Image Column */}
                    
                    {/* Content Column */}
                    <div className="content-column">
                        <div className="content-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="sec-title">
                                <h2>Pioneering in Health.</h2>
                                <div className="separator style-two"></div>
                            </div>
                            <div className="text">
                                <p>Our main long-term goal is always achieving complex results for your dental health. But in the process, we also keep the focus on giving you the best customer service. We're always making our dental office as safe place as possible!</p>
                                <p>Nulla auctor neque non tortor tincidunt fringilla. Nam in condimentum orci. Integer ac pellentesque sem. Nulla fringilla dui id metus viverra interdum.</p>
                            </div>
                            <div className="row clearfix">
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <ul className="list-style-one">
                                        <li><span className="icon flaticon-medical-stethoscope-variant"></span>Medical Treatment</li>
                                        <li><span className="icon flaticon-doctor"></span>Qualified Doctors</li>
                                    </ul>
                                </div>
                                <div className="column col-lg-6 col-md-6 col-sm-12">
                                    <ul className="list-style-one">
                                        <li><span className="icon flaticon-ambulance-side-view"></span>Emergency Help</li>
                                        <li><span className="icon flaticon-medical-kit"></span>Medical Professionals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PioneeringHealth;
