import React from "react";

const ContactMap = () => {
  return (
    <>
      {/* Contact Map Section */}
      <section className="contact-map-section mb-5">
        <div className="outer-container">
          <div className="auto-container clearfix">
            <div className="map-content">
              <div className="title">Wanna Touch?</div>
              <h2>Contact Info</h2>
              <ul className="info-list">
                <li>
                  <span className="icon fas fa-envelope"></span>
                  website@example.com
                </li>
                <li>
                  <span className="icon fas fa-phone-volume"></span>(+1)
                  828-376-0532
                </li>
                <li>
                  <span className="icon fas fa-map-marker-alt"></span>9332
                  Bernier Dam, Miami, USA
                </li>
                <li>
                  <span className="icon far fa-clock"></span>Monday-Saturday
                  7:00AM - 6:00PM
                </li>
              </ul>

              <ul className="social-icons">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fab fa-google"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fab fa-skype"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fab fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="map-outer">
            <div class="map-canvas">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.876765037759!2d144.9534427157491!3d-37.81704077975566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d68e2e21d5%3A0xf4957b0135b0a61e!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2suk!4v1623429156349!5m2!1sen!2suk"
                width="100%"
                height="513.2"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              </div>
            </div>
        </div>
      </section>
      {/* End Map Section */}
    </>
  );
};

export default ContactMap;
