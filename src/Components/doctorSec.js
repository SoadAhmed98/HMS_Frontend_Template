import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const DoctorSec = () => {
  const [doctors, setDoctors] = useState([]);
  const [activeDoctor, setActiveDoctor] = useState(0);

  useEffect(() => {
    axios.get("http://localhost/api/doctors")
      .then(res => {
        console.log("API Response:", res.data);
        setDoctors(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleDoctorClick = (index) => {
    setActiveDoctor(index);
  };

  return (
    <section className="doctors-section style-two">
      <div className="auto-container">
          
          {/* Features Tab */}
          <div className="doctors-tabs tabs-box">

              <ul className="doctors-thumb tab-buttons clearfix">
                {doctors.map((doctor, index) => (
                  <li 
                    key={doctor.id}
                    className={`tab-btn ${index === activeDoctor ? 'active-btn' : ''}`}
                    data-tab={`#doctor-tab-${index + 1}`}
                    onClick={() => handleDoctorClick(index)}
                  >
                    <div className="image-box">
                      <figure><img src={doctor.image} alt={doctor.name} /></figure>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Tabs Container */}
              <div className="tabs-content">
                {doctors.map((doctor, index) => (
                  <div 
                    key={doctor.id}
                    className={`doctor-info tab ${index === activeDoctor ? 'active-tab' : ''}`} 
                    id={`doctor-tab-${index + 1}`}
                  >
                    <div className="row clearfix">
                      {/* Image-column */}
                      <div className="image-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <div className="image-box">
                            <a href={doctor.image} className="lightbox-image" data-fancybox="Gallery">
                              <img src={doctor.image} alt={doctor.name} />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Content-column */}
                      <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <h3 className="name"><Link to={`/doctors-detail/${doctor.id}`}>{doctor.name}</Link></h3>
                          <span className="designation">{doctor.profession}</span>
                          <span className="timing">
                            <i className="flaticon-alarm-clock"></i> 
                            {doctor.works_day.map((workDay, index) => (
                              <div key={index}>
                                <strong>{workDay.day}:</strong> 
                              </div>
                            ))}
                          </span>
                          <div className="clearfix">
                            <div className="call-btn">
                              <a href="doctors.html" className="theme-btn btn-style-two">
                                <span className="txt">Book Appointment</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

          </div>

      </div>
    </section>
  );
}

export default DoctorSec;
