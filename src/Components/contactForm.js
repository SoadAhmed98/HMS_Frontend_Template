import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again.");
      });
    e.target.reset();
  };

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
            <form onSubmit={sendEmail} id="contact-form">
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

                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                  <button className="theme-btn btn-style-two" type="submit" name="submit-form">
                    <span className="txt">Contact Us</span>
                  </button>
                  <Toaster />
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
