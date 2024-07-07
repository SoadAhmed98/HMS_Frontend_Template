import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navDropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from local storage
    const loginStatus = localStorage.getItem("login") === "true";
    setIsLoggedIn(loginStatus);

    const handleOutsideClick = (event) => {
      if (
        navDropdownRef.current &&
        !navDropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    // Clear login status and redirect to home page or login page
    localStorage.setItem("login", "false");
    localStorage.setItem("data", "");
    // localStorage.setItem("token", "");

    setIsLoggedIn(false);
    // Redirect to home or login page
    window.location.href = "/";
  };

  useEffect(() => {
    // Initialize Swiper
    new Swiper(".banner-carousel", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
      <header className="main-header header-style-three">
        <div className="header-upper">
          <div className="container  clearfix">
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
                    <NavLink exact className="nav-link home-nav-hover" activeClassName="active" to="/" style={{ backgroundColor: 'white' }}>
                      Home
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item dropdown ${activeDropdown === 'about' ? 'show' : ''}`}
                    onClick={() => handleDropdownClick('about')}
                  >
                    <NavLink
                      exact
                      className="nav-link dropdown-toggle home-nav-hover"
                      to="/about"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === 'about' ? 'true' : 'false'}
                    >
                      About Us
                    </NavLink>
                    <ul
                      className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}
                      aria-labelledby="navbarDropdown"
                      ref={navDropdownRef}
                    >
                      <li>
                        <NavLink exact className="dropdown-item home-nav-hover" to="/about">
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact className="dropdown-item home-nav-hover" to="chatbox">
                          Chat Box
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact className="dropdown-item home-nav-hover" to="/ourTeam">
                          Welcome
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ">
                    <NavLink exact className="nav-link home-nav-hover" to="/ourTeam">
                      Doctors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link home-nav-hover" to="/department">
                      Department
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link home-nav-hover" to="/packages">
                      Packages
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link home-nav-hover" activeClassName="active" to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link home-nav-hover" activeClassName="active" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link home-nav-hover" activeClassName="active" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item dropdown ${activeDropdown === 'profile' ? 'show' : ''}`}
                    onClick={() => handleDropdownClick('profile')}
                  >
                    {isLoggedIn ? (
                      <NavLink exact
                      className="nav-link dropdown-toggle d-flex align-items-start home-nav-hover"
                      to="/profile"
                      id="profileDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === 'profile' ? 'true' : 'false'}
                    >
                      <span>Profile</span>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                        alt="Profile"
                        className="img-fluid rounded-circle ms-2"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </NavLink>
                    ) : (
                      <NavLink
                      exact
                        className="nav-link dropdown-toggle home-nav-hover"
                        to="/login"
                        id="loginRegisterDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === 'profile' ? 'true' : 'false'}
                      >
                        Login/Register
                      </NavLink>
                    )}
                    <ul
                      className={`dropdown-menu ${activeDropdown === 'profile' ? 'show' : ''}`}
                      aria-labelledby="profileDropdown"
                      ref={navDropdownRef}
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
                            <NavLink className="dropdown-item home-nav-hover" to="/login">
                              Login
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item home-nav-hover" to="/register">
                              Register
                            </NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
              {/* {isLoggedIn && (
  
//   <div className="outer-box">
//   <ul className="social-box">
//     <li>
//         <div className="profile-icon">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
//             alt="Profile"
//             className="img-fluid"
//           />
//         </div>
//     </li>
//   </ul>
// </div>
  
)} */}
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
                        <Link
                          to="/contact"
                          className="theme-btn appointment-btn home-nav-hover"
                        >
                          <span className="txt">Appointment</span>
                        </Link>
                        <Link to="/services" className="theme-btn services-btn home-nav-hover">
                          Services
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img
                          src="images/doc1.png"
                          alt="Main Slider"
                          className="bg-body"
                        />
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
                        <Link
                          to="/contact"
                          className="theme-btn appointment-btn home-nav-hover"
                        >
                          <span className="txt">Appointment</span>
                        </Link>
                        <Link to="/services" className="theme-btn services-btn home-nav-hover">
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
