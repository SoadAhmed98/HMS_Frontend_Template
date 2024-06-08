import React from 'react';

const DoctorTab = ({ id, activeTab, imgSrc, name, designation, timings }) => {
  return (
    <div className={`doctor-info tab ${activeTab === id ? 'active-tab' : ''}`} id={id}>
      <div className="row clearfix">
        <div className="image-column col-lg-5 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="image-box">
              <a href={imgSrc} className="lightbox-image" data-fancybox="Gallery">
                <img src={imgSrc} alt="Doctor" />
              </a>
            </div>
          </div>
        </div>
        <div className="content-column col-lg-5 col-md-12 col-sm-12">
          <div className="inner-column">
            <h3 className="name"><a href="doctors.html">{name}</a></h3>
            <span className="designation">{designation}</span>
            <p>Duis sed odio sit amet nibh vulputate cursus sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar.</p>
            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar.</p>
            <span className="timing"><i className="flaticon-alarm-clock"></i> {timings}</span>
            <div className="clearfix">
              <div className="social-links">
                <h4>Follow Me:</h4>
                <ul className="clearfix">
                  <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
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
  );
};

export default DoctorTab;
