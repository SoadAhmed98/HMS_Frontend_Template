import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhoneNu] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', { email, department, message, name, phone_nu });
      toast.success('Email sent successfully');
    } catch (error) {
      toast.error('Error sending email');
    }
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
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("name")}
                      value={name}
                      onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                      value={email}
                      onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Department"
                      placeholder={t("phone")}
                      value={phone}
                       required
                      onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    name="department"
                      placeholder={t("department")}
                      value={department}
                      onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea
                      name="message"
                      placeholder={t("message")}
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
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
