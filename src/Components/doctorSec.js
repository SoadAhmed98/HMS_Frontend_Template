import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const doctors = [
  {
    name: "Dr. Johan Doe",
    designation: "Neurosurgeon",
    image: "images/doc3.png",
    bio: "Duis sed odio sit amet nibh vulputate cursus sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Nam nec tellus a odio tincidunt auctor a ornare odio.",
    timing: "Monday - Friday (5:00pm - 8pm)",
    socialLinks: [
      { icon: "fab fa-pinterest-p" },
      { icon: "fab fa-google-plus-g" },
      { icon: "fab fa-twitter" },
      { icon: "fab fa-facebook-f" },
      { icon: "fab fa-dribbble" },
    ],
  },
  {
    name: "2Dr. Johan Doe",
    designation: "Neurosurgeon",
    image: "images/doc2.png",
    bio: "Duis sed odio sit amet nibh vulputate cursus sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Nam nec tellus a odio tincidunt auctor a ornare odio.",
    timing: "Monday - Friday (5:00pm - 8pm)",
    socialLinks: [
      { icon: "fab fa-pinterest-p" },
      { icon: "fab fa-google-plus-g" },
      { icon: "fab fa-twitter" },
      { icon: "fab fa-facebook-f" },
      { icon: "fab fa-dribbble" },
    ],
  },
  {
    name: "3Dr. Johan Doe",
    designation: "Neurosurgeon",
    image: "images/doc1.png",
    bio: "Duis sed odio sit amet nibh vulputate cursus sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Nam nec tellus a odio tincidunt auctor a ornare odio.",
    timing: "Monday - Friday (5:00pm - 8pm)",
    socialLinks: [
      { icon: "fab fa-pinterest-p" },
      { icon: "fab fa-google-plus-g" },
      { icon: "fab fa-twitter" },
      { icon: "fab fa-facebook-f" },
      { icon: "fab fa-dribbble" },
    ],
  },
  
];

const DoctorSec = () => {
  const [activeDoctor, setActiveDoctor] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
                    key={index}
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
                    key={index}
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
                          <h3 className="name"><a href="doctors.html">{doctor.name}</a></h3>
                          <span className="designation">{doctor.designation}</span>
                          <p>{doctor.bio}</p>
                          <span className="timing"><i className="flaticon-alarm-clock"></i> {doctor.timing}</span>
                          <div className="clearfix">
                            <div className="social-links">
                              <h4>Follow Me:</h4>
                              <ul className="clearfix">
                                {doctor.socialLinks.map((link, index) => (
                                  <li key={index}><a href="#"><i className={link.icon}></i></a></li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="call-btn">
                              <a href="doctors.html" className="theme-btn btn-style-two"><span className="txt">Book Appointment</span></a>
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
