import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorDetails = (props) => {
  const [doctorDetails, setDoctorDetails] = useState({});

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/doctors/${props.id}`);
        setDoctorDetails(response.data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctor();
  }, [props.id]);

  return (
    <section className="doctor-detail">
      <div className="auto-container">
        <div className="upper-box">
          <div className="row clearfix">
            <div className="detail-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-box">
                <div className="info-header">
                  <p>Provide Comprehensive Quality Care</p>
                  <h3>I'm Dr. {doctorDetails.name}</h3>
                  <span className="designation">{doctorDetails.department}</span>
                </div>
                <ul className="info-list">
                  <li>
                    <strong>Expertise</strong>
                    <p>{doctorDetails.expertise}</p>
                  </li>
                  <li>
                    <strong>Education</strong>
                    <p>{doctorDetails.education}</p>
                  </li>
                  <li>
                    <strong>Experience</strong>
                    <p>{doctorDetails.experience}</p>
                  </li>
                  <li>
                    <strong>Profession</strong>
                    <p>{doctorDetails.profession}</p>
                  </li>
                  <li><strong>Email</strong><p> {doctorDetails.email}</p></li>
                  <li><strong>Fees</strong> <p>{doctorDetails.fees}</p></li> 
                </ul>
              </div>
            </div>
            <div className="image-box col-lg-4 col-md-12 col-sm-12">
              <div className="image">
                <img
                  src={doctorDetails.image}
                  alt="Doctor"
                  style={{ height: "30rem" }}
                  className="wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                />
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
                <div className="timetable">
                <h3><small>Check Our</small> Weekly Timetable</h3>
                  <p>Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan non laoreet nulla luctus...</p>
                <ul>
                      {doctorDetails.works_day && doctorDetails.works_day.map(day => (
                        <li key={day.day}>{day.day}<span> {day.slots.join(', ')}</span></li>
                      ))}
                    </ul>
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
