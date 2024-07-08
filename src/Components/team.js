import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeamSection = () => {
    const [doctors, setDoctors] = useState([]);
    const [activeDoctor, setActiveDoctor] = useState(0);
  
    useEffect(() => {
      axios.get("http://localhost/api/doctors")
        .then(res => {
        //   console.log("API Response:", res.data);
          setDoctors(res.data.data);
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });
    }, []);

    return (
        <section className="team-section py-5">
            <div className="container">
                <div className="sec-title centered">
                    <h2>The Medical Specialists</h2>
                    <div className="separator"></div>
                </div>
                <div className="row">
                    {doctors.length === 0 ? (
                  <h1></h1>
                ) : (
                    doctors.map((doctor, index) => (
                        
                        <div key={index} className="team-block col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className={`inner-box wow fadeInLeft`} data-wow-delay="1ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src={doctor.image} alt={doctor.name} className="img-fluid" style={{height:"20rem",backgroundColor:"#E5E8E8"}}/>
                                    <div className="overlay-box">
                                        <ul className="social-icons list-inline">
                                            {/* <li className="list-inline-item"><a href={doctor.social.facebook}><span className="fab fa-facebook-f"></span></a></li>
                                            <li className="list-inline-item"><a href={doctor.social.google}><span className="fab fa-google"></span></a></li>
                                            <li className="list-inline-item"><a href={doctor.social.twitter}><span className="fab fa-twitter"></span></a></li>
                                            <li className="list-inline-item"><a href={doctor.social.skype}><span className="fab fa-skype"></span></a></li>
                                            <li className="list-inline-item"><a href={doctor.social.linkedin}><span className="fab fa-linkedin-in"></span></a></li> */}
                                        </ul>
                                        <a href="#" className="appointment btn btn-primary">Make Appointment</a>
                                    </div>
                                </div>
                                <div className="lower-content text-center mt-3">
                                    <h3><Link to={`/doctors-detail/${doctor.id}`}>{doctor.name}</Link></h3>
                                    <div className="designation">{doctor.expertise}</div>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
