import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const aboutDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from local storage
    const loginStatus = localStorage.getItem("login") === "true";
    setIsLoggedIn(loginStatus);

    // Initialize Swiper
    new Swiper(".banner-carousel", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    // Clear login status and redirect to home page or login page
    localStorage.setItem("login", "false");
    setIsLoggedIn(false);
    // Redirect to home or login page
    window.location.href = "/";
  };

  return (
    <>
      <header className="main-header header-style-three">
        <div className="header-upper">
          <div className="container clearfix">
            <nav className="navbar navbar-expand-md navbar-dark main-menu">
              <Link to="/" className="navbar-brand">
                <img
                  src="images/logo/4.png"
                  alt=""
                  title=""
                  style={{ width: "18rem", height: "11rem" }}
                  className="pb-3"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={activeDropdown ? "true" : "false"}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse navigation clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      exact={true}
                      style={{ backgroundColor: "white" }}
                      className="nav-link home-nav-hover"
                      activeClassName="active"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className={`nav-item dropdown ${activeDropdown === "about" ? "show" : ""}`}>
                    <div
                      className={`nav-link dropdown-toggle home-nav-hover ${activeDropdown === "about" ? "active" : ""}`}
                      id="navbarDropdownAbout"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === "about" ? "true" : "false"}
                      onClick={() => handleDropdownClick("about")}
                      style={{ backgroundColor: activeDropdown === "about" ? "white" : "" }}
                    >
                      About Us
                    </div>
                    <ul
                      className={`dropdown-menu ${activeDropdown === "about" ? "show" : ""}`}
                      aria-labelledby="navbarDropdownAbout"
                      ref={aboutDropdownRef}
                    >
                      <li>
                        <NavLink exact={true} className="dropdown-item home-nav-hover" to="/about">
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact={true} className="dropdown-item home-nav-hover" to="/predict">
                          Predict
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact={true} className="dropdown-item home-nav-hover" to="/faq">
                          FAQ
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink exact={true} className="nav-link home-nav-hover" to="/ourTeam">
                      Doctors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact={true} className="nav-link home-nav-hover" to="/department">
                      Department
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact={true} className="nav-link home-nav-hover" to="/packages">
                      Packages
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact={true} className="nav-link home-nav-hover" activeClassName="active" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact={true} className="nav-link home-nav-hover" activeClassName="active" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className={`nav-item dropdown ${activeDropdown === "profile" ? "show" : ""}`}>
                    {isLoggedIn ? (
                      <NavLink
                        exact={true}
                        className="nav-link dropdown-toggle d-flex align-items-start home-nav-hover"
                        to="#"
                        id="profileDropdown"
                        role="button"
                        onClick={() => handleDropdownClick("profile")}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === "profile" ? "true" : "false"}
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                          alt="Profile"
                          className="img-fluid rounded-circle ms-2"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </NavLink>
                    ) : (
                      <div
                        className={`nav-link dropdown-toggle home-nav-hover ${activeDropdown === "profile" ? "active" : ""}`}
                        id="navbarDropdownProfile"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === "profile" ? "true" : "false"}
                        onClick={() => handleDropdownClick("profile")}
                        style={{ backgroundColor: activeDropdown === "profile" ? "white" : "" }}
                      >
                        Login/Register
                      </div>
                    )}
                    <ul
                      className={`dropdown-menu ${activeDropdown === "profile" ? "show" : ""}`}
                      aria-labelledby="navbarDropdownProfile"
                      ref={profileDropdownRef}
                    >
                      {isLoggedIn ? (
                        <>
                          <li>
                            <NavLink className="dropdown-item home-nav-hover" to="/profile">
                              Profile
                            </NavLink>
                          </li>
                          <li>
                            <button className="dropdown-item home-nav-hover" onClick={handleLogout}>
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink className="dropdown-item" to="/login">
                              Login
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="/register">
                              Register
                            </NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="main-slider-three">
        <div className="banner-carousel swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="container">
                <div className="row clearfix">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Your Most Trusted Health Partner For Life.</h2>
                      <div className="text">
                        We offer free consulting and the best project management
                        for your ideas, 100% delivery guaranteed.
                      </div>
                      <div className="btn-box">
                        <Link to="/contact" className="theme-btn appointment-btn">
                          <span className="txt">Appointment</span>
                        </Link>
                        <Link to="/services" className="theme-btn services-btn">
                          Services
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="images/doc1.png" alt="Main Slider" className="bg-body" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
              <div className="container">
                <div className="row clearfix">
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Your Most Trusted Health Partner For Life.</h2>
                      <div className="text">
                        We offer free consulting and the best project management
                        for your ideas, 100% delivery guaranteed.
                      </div>
                      <div className="btn-box">
                        <Link to="/contact" className="theme-btn appointment-btn">
                          <span className="txt">Appointment</span>
                        </Link>
                        <Link to="/services" className="theme-btn services-btn">
                          Services
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="images/main-slider/3.jpg" alt="Main Slider" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
