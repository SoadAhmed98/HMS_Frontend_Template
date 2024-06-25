import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const navDropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navDropdownRef.current && !navDropdownRef.current.contains(event.target)) {
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

  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="auto-container clearfix">
          <nav className="navbar navbar-expand-md navbar-light main-menu">
            <Link className="navbar-brand" to="/">
              <img
                src="/images/logo/3.png"
                alt="Logo"
                title="Logo"
                style={{ width: "16rem", height: "10.5rem" }}
                className="pb-2"
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
                <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="active" to="/about">
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/ourTeam">
                    Doctors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/department">
                    Department
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/packages">
                    Packages
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact  className="nav-link"  activeClassName="active" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="outer-box clearfix">
                <div className="btn-box">
                  <a href="contact.html" className="theme-btn btn-style-one">
                    <span className="txt">Appointment</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CustomNavbar;
