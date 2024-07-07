import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const aboutDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from local storage
    const loginStatus = localStorage.getItem("login") === "true";
    setIsLoggedIn(loginStatus);

    const handleOutsideClick = (event) => {
      if (
        (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) &&
        (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target))
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

  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="auto-container  clearfix">
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
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navigation clearfix" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    style={{ backgroundColor: 'white' }}
                    className="nav-link allNav"
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className={`nav-item dropdown ${activeDropdown === 'about' ? 'show' : ''}`}
                  onClick={() => handleDropdownClick('about')}
                >
                  <NavLink
                    exact={true}
                    className="nav-link dropdown-toggle allNav"
                    to="/about"
                    id="navbarDropdownAbout"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === 'about' ? 'true' : 'false'}
                  >
                    About Us
                  </NavLink>
                  <ul
                    className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}
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
                  <NavLink exact={true} className="nav-link allNav" to="/ourTeam">
                    Doctors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} className="nav-link allNav" to="/department">
                    Department
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} className="nav-link allNav" to="/packages">
                    Packages
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} className="nav-link allNav" activeClassName="active" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} className="nav-link allNav" activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li
                  className={`nav-item dropdown ${activeDropdown === 'profile' ? 'show' : ''}`}
                  onClick={() => handleDropdownClick('profile')}
                >
                  {isLoggedIn ? (
                    <NavLink
                      exact={true}
                      className="nav-link dropdown-toggle d-flex align-items-start"
                      to="/profile"
                      id="profileDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === 'profile' ? 'true' : 'false'}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                        alt="Profile"
                        className="img-fluid rounded-circle ms-2"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </NavLink>
                  ) : (
                    <NavLink
                      exact={true}
                      className="nav-link dropdown-toggle allNav"
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
                          <NavLink className="dropdown-item allNav" to="/login">
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item allNav" to="/register">
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
    // this correct
  );
};

export default CustomNavbar;
