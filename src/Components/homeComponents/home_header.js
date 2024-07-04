import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navDropdownRef = useRef(null);

  useEffect(() => {
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
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".banner-carousel", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      navigation: true,
    });
  }, []);

  return (
    <>
<header className="main-header header-style-three">
      <div className="header-upper">
        <div className="auto-container clearfix">
          <nav className="navbar navbar-expand-md navbar-light main-menu">
          <Link to="/">
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

            <div className="collapse navbar-collapse navigation clearfix" id="navbarSupportedContent">
              <ul className="me-auto mb-2 mb-lg-0 navigation clearfix">
                <li className="nav-item current">
                <NavLink exact className="nav-link" activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact className="nav-link"  to="/about">
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link" to="/ourTeam">
                    Doctors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link" to="/department">
                    Department
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link" to="/packages">
                    Packages
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/faq">
                    FAQ
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/blog">
                    Blog
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/predict">
                    Predict
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="outer-box clearfix">
                <ul className="social-box clearfix">
                  <li>
                    <Link to="#">
                      <span className="fab fa-facebook-f"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-google"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="fab fa-linkedin-in"></span>
                    </Link>
                  </li>
                </ul>
              </div> 
          </nav>
        </div>
      </div>
    </header>

      <section className="main-slider-three ">
        <div className="banner-carousel swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="auto-container">
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
                          className="theme-btn appointment-btn"
                        >
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
              <div className="auto-container">
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
                          className="theme-btn appointment-btn"
                        >
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
