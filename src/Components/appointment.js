import React from 'react';

const AppointmentSection = () => {
    return (
        <section className="appointment-section-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">

                         {/* Form Column */}
                         <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <h2>Appointment Form</h2>
                                    <div className="separator"></div>
                                </div>

                                {/* Appointment Form */}
                                <div className="appointment-form">
                                    <form method="post" action="appointment.html">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Name" required />
                                                <span className="icon fa fa-user"></span>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Email" required />
                                                <span className="icon fa fa-envelope"></span>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="tel" name="phone" placeholder="Phone No" required />
                                                <span className="icon fas fa-phone"></span>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="department" placeholder="Department" required />
                                                <span className="icon fas fa-home"></span>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="day" placeholder="Day" />
                                                <span className="icon fa fa-calendar"></span>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="time" placeholder="Time" />
                                                <span className="icon far fa-clock"></span>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button className="theme-btn btn-style-two" type="submit" name="submit-form">
                                                    <span className="txt">Book Appointment</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src="images/docs1.png" alt="Doctor" style={{paddingTop:"12rem"}}/>
                                </div>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
