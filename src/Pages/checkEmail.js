import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import WOW from "wowjs";
import { validEmail } from "../Components/rejex.js";

const CheckEmail = (props) => {
  const [email, setEmail] = useState('');
  const [redirectToResetPassword, setRedirectToResetPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    CheckEmail: "",
  });


  const submit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://127.0.0.1:80/api/patient/check-email", {
            email
          }, {
            headers: {
              "Accept": "application/json",
              'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
            },
            withCredentials: true,
          });

      if (response.status === 200) {
        setRedirectToResetPassword(true);
      } else {
        setErrors({ ...errors, CheckEmail: 'Email not found' });
      }
    } catch (error) {
      setErrors({ ...errors, CheckEmail: error.response?.data?.message || 'An error occurred. Please try again later.' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      setErrors({ ...errors, email: validEmail.test(value) ? "" : "Invalid email format" });
    }
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  if (redirectToResetPassword) {
    return <Redirect to="/reset-password" />;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <div className="sec-title centered">
                <h2>Please Enter Your Email</h2>
                <div className="separator"></div>
              </div>
              <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <form onSubmit={submit} className="form-group">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        value={email}
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                      <div className="invalid-feedback">{errors.email}</div>
                    </div>
                    {errors.CheckEmail && (
                      <div className="col-lg-12 mb-3 text-danger">{errors.CheckEmail}</div>
                    )}
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        disabled={Object.values(errors).some((error) => error !== "")}
                        type="submit"
                        className="theme-btn btn-style-two w-100 mb-2"
                      >
                          <span className="txt">Send</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
