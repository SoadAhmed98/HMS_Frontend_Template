import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/header.js";
import WOW from 'wowjs';
import Navbar from "../Components/navbar.js";
import { validEmail, validPassword, validUsername } from "../Components/rejex.js";

function Register() {
  const history = useHistory();

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userName: "",
    pass: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    userName: "",
    pass: "",
    confirmPass: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: validEmail.test(value) ? "" : "Invalid email format",
        });
        break;
      case "pass":
        setErrors({
          ...errors,
          pass: validPassword.test(value) ? "" : "Invalid password format",
        });
        break;
      case "name":
        setErrors({
          ...errors,
          name: value.length < 3 ? "Name must be at least 3 characters long" : "",
        });
        break;
      case "userName":
        setErrors({
          ...errors,
          userName: validUsername.test(value) ? "" : "Invalid username format",
        });
        break;
      case "confirmPass":
        setErrors({
          ...errors,
          confirmPass: value !== userData.pass ? "Passwords do not match" : "",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValid = Object.values(errors).every((error) => error === "");
    if (formValid) {
      localStorage.setItem("userData", JSON.stringify(userData));
      history.push("/login");
    }
  };

  return (
    <>
      <Navbar />
      <Header head="Register For MediTech" content="What We Actually Do?" place="Register" />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Register To Join Us Now</h2>
              <div className="separator"></div>
            </div>
            <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <form onSubmit={handleSubmit} className="w-75 mx-auto form-group">
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    {/* <label htmlFor="name" className="form-label fw-bolder text-dark">Name</label> */}
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      value={userData.name}
                      onChange={handleInputChange}
                      name="name"
                      placeholder="Name"
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    {/* <label htmlFor="email" className="form-label fw-bolder text-dark">Email</label> */}
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      value={userData.email}
                      onChange={handleInputChange}
                      name="email"
                      placeholder="Email"
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    {/* <label htmlFor="userName" className="form-label fw-bolder text-dark">Username</label> */}
                    <input
                      type="text"
                      className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                      value={userData.userName}
                      onChange={handleInputChange}
                      name="userName"
                      placeholder="Username"
                    />
                    <div className="invalid-feedback">{errors.userName}</div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    {/* <label htmlFor="pass" className="form-label fw-bolder text-dark">Password</label> */}
                    <input
                      type="password"
                      className={`form-control ${errors.pass ? "is-invalid" : ""}`}
                      value={userData.pass}
                      onChange={handleInputChange}
                      name="pass"
                      placeholder="Password"
                    />
                    <div className="invalid-feedback">{errors.pass}</div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    {/* <label htmlFor="confirmPass" className="form-label fw-bolder text-dark">Confirm Password</label> */}
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPass ? "is-invalid" : ""}`}
                      value={userData.confirmPass}
                      onChange={handleInputChange}
                      name="confirmPass"
                      placeholder="Confirm Password"
                    />
                    <div className="invalid-feedback">{errors.confirmPass}</div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      disabled={!Object.values(errors).every((error) => error === "")}
                      type="submit"
                      className="theme-btn btn-style-two w-100 mb-2"
                    >
                      <span className="txt">Register</span>
                    </button>
                  </div>
                </div>
              </form>

              <div className="text-center">
                <p className="mb-0">Already have an account?</p>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
