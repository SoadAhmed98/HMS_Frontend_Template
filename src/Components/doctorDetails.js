import React from 'react';

const DoctorDetails = () => {
  return (
    <section className="doctor-detail">
      <div className="auto-container">

        <div className="upper-box">
          <div className="row clearfix">
            <div className="detail-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="info-header">
                  <p>Provide Comprehensive Quality Care</p>
                  <h3>I'm Dr. Johan Doe</h3>
                  <span className="designation">Neurosurgeon</span>
                </div>
                <ul className="info-list">
                  <li>
                    <strong>Expertise</strong>
                    <p>Cardiology</p>
                    <p>Heart Specialist</p>
                  </li>
                  <li>
                    <strong>Education</strong>
                    <p>Doctor of Medicine, University of Texas, USA (1990) Medical Orientation Program, St. Louis University (St. Louis, Missouri 1996)</p>
                  </li>
                  <li>
                    <strong>Experience</strong>
                    <p>15 years of Experience in Medicine</p>
                  </li>
                  <li>
                    <strong>Profession</strong>
                    <p>MD Dean and Executive Vice President for Medical Affairs School of Medicine and Graduate School of Biomedical Sciences University of Texas Health Science Center at San Antonio</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="image-box col-lg-4 col-md-12 col-sm-12">
              <div className="image">
                <a href="images/resource/doctor-3.jpg" className="lightbox-image">
                  <img src="images/resource/doctor-3.jpg" alt="Doctor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Content */}
        <div className="lower-content">
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="appointment-form">
                  <div className="sec-title centered">
                    <h2>Appointment Form</h2>
                    <p>Get to Book Your Appointment Now</p>
                  </div>
                  <form method="post" action="appointment.html">
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="text" name="username" placeholder="Name" required />
                        <span className="icon fa fa-user"></span>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="email" name="email" placeholder="Email" required />
                        <span className="icon fa fa-envelope"></span>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="tel" name="phone" placeholder="Phone No" required />
                        <span className="icon fas fa-phone"></span>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <select className="custom-select-box">
                          <option>Cardiology Department</option>
                          <option>Neurology Department</option>
                          <option>Urology Department</option>
                          <option>Gynecological Conditions</option>
                          <option>Pediatric Department</option>
                          <option>Laboratory Department</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="text" name="day" placeholder="Day" />
                        <span className="icon fa fa-calendar"></span>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                        <input type="text" name="time" placeholder="Time" />
                        <span className="icon far fa-clock"></span>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                        <textarea name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 form-group text-center">
                        <button className="theme-btn btn-style-two" type="submit" name="submit-form">
                          <span className="txt">Book Appointment</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-box">
                <ul className="contact-list">
                  <li><span>E-mail:</span> example@company.com</li>
                  <li><span>Phone: </span> +000 000 0000</li>
                  <li><span>Timming:</span> 9:00am -5:00pm</li>
                  <li className="clearfix">
                    <a href="#" className="clearfix theme-btn btn-style-two">
                      <span className="txt btn-txt">On Vacation</span>
                    </a>
                    <span className="pull-right time">12:00pm -3:00pm</span>
                  </li>
                </ul>
                <ul className="social-icon-one">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                </ul>
                <div className="timetable">
                  <h3><small>Check Our</small> Weekly Timetable</h3>
                  <p>Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan non laoreet nulla luctus...</p>
                  <ul>
                    <li>Monday - Friday <span>8.00 - 18.00</span></li>
                    <li>Saturday <span>9.00 - 16.00</span></li>
                    <li>Sunday <span>9.00 - 16.00</span></li>
                  </ul>
                  <a href="#" className="theme-btn doctor-btn">
                    <i className="fa fa-user-md"></i> See Doctors Time Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
