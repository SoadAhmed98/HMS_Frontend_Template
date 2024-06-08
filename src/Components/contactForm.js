import React from "react";

const ContactForm = () => {
  return (
    <>
      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Now Contact With Us</h2>
            <div className="separator"></div>
          </div>

          {/* Contact Form */}
          <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            {/*Contact Form*/}
            <form method="post" action="sendemail.php" id="contact-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    required
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                    name="message"
                    placeholder="Your Question"
                  ></textarea>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 text-center form-group">
							<button class="theme-btn btn-style-two" type="submit" name="submit-form"><span class="txt">Contact Us</span></button>
						</div>
              </div>
            </form>

            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* End Contact Page Section */}
    </>
  );
};

export default ContactForm;
