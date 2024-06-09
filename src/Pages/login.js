import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Components/header.js";
import Navbar from "../Components/navbar.js";
import WOW from 'wowjs';
import { validEmail, validPassword } from "../Components/rejex.js";

function Login(props) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    login: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: validEmail.test(value) ? "" : "Invalid email format",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validPassword.test(value)
            ? ""
            : "Invalid password format",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserData &&
      storedUserData.email === formData.email &&
      storedUserData.pass === formData.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      history.push("/");
    } else {
      setErrors({ ...errors, login: "Invalid email or password" });
    }
  };

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Navbar />
      <Header head="Login For MediTech" content="What We Actually Do?" place="Login" />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Login </h2>
              <div className="separator"></div>
            </div>
            <div className="contact-form wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col-lg-12 form-group">
                    <p className="text-danger">{errors.login}</p>
                  </div>
                  <div className="col-lg-12 form-group">
                    {/* <label htmlFor="email" className="form-label fw-bolder text-dark">Email</label> */}
                    <input
                      required
                      type="email"
                      // className={`form-control ${errors.email ? "border-danger" : "border-success"}`}
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                      placeholder="Email"
                    />
                    <p className="text-danger"> {errors.email} </p>
                  </div>

                  <div className="col-lg-12 col-md-6 form-group"> 
                    {/* <label htmlFor="password" className="form-label fw-bolder text-dark">Password</label> */}
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      // className={`form-control ${errors.password ? "border-danger" : "border-success"}`}
                      className="form-control"
                      onChange={handleInputChange}
                      value={formData.password}
                      name="password"
                      placeholder="Password"
                    />
                    <p className="text-danger"> {errors.password} </p>
                  </div>

                  <div className="col-lg-12 col-md-6 form-group"> 
                    <input
                      id="showPassword"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword" className="text-dark mx-1">Show Password</label>
                  </div>

                  <div className="col-lg-12 form-group text-center">
                    <button
                      disabled={errors.email || errors.password}
                      type="submit"
                      className="theme-btn btn-style-two w-25 mb-2"
                    >
                      <span className="txt">Login</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-center mt-2">
              <h5 className="card-title text-dark">New User?</h5>
              <Link to="/register" className="card-text ">Register now to create an account.</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
