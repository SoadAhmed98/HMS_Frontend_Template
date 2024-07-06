import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navDropdownRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from local storage
    const loginStatus = localStorage.getItem("login") === "true";
    setIsLoggedIn(loginStatus);

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

  const handleLogout = () => {
    // Clear login status and redirect to home page or login page
    localStorage.setItem("login", "false");
    setIsLoggedIn(false);
    // Redirect to home or login page
    window.location.href = "/";
  };

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
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
                  <NavLink exact className="nav-link" activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className={`nav-item dropdown ${activeDropdown === 'about' ? 'show' : ''}`}>
                  <NavLink
                    exact
                    className="nav-link dropdown-toggle"
                    to="/about"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={activeDropdown === 'about' ? 'true' : 'false'}
                    onClick={() => handleDropdownClick('about')}
                  >
                    About Us
                  </NavLink>
                  <ul
                    className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}
                    ref={navDropdownRef}
                  >
                    <li className="nav-item">
                      <NavLink exact className="dropdown-item" to="/about" onClick={() => setActiveDropdown(null)}>
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact className="dropdown-item" to="/chatbox" onClick={() => setActiveDropdown(null)}>
                        Chat Box
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact className="dropdown-item" to="/ourTeam" onClick={() => setActiveDropdown(null)}>
                        Welcome
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/ourTeam">
                    Doctors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/department">
                    Department
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/packages">
                    Packages
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li
                    className={`nav-item dropdown ${activeDropdown === 'profile' ? 'show' : ''}`}
                    onClick={() => handleDropdownClick('profile')}
                  >
                    {isLoggedIn ? (
                      <NavLink exact
                        className="nav-link dropdown-toggle"
                        to="/profile"
                        id="profileDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === 'profile' ? 'true' : 'false'}
                      >
                      Hi gehad
                      </NavLink>
                    ) : (
                      <NavLink
                      exact
                        className="nav-link dropdown-toggle "
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
                            <NavLink className="dropdown-item" to="/profile" onClick={() => setActiveDropdown(null)}>
                              Profile
                            </NavLink>
                          </li>
                          <li>
                            <button className="dropdown-item" onClick={handleLogout}>
                              Logout
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink className="dropdown-item" to="/login" onClick={() => setActiveDropdown(null)}>
                              Login
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="/register" onClick={() => setActiveDropdown(null)}>
                              Register
                            </NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
              </ul>
              {isLoggedIn && (
                <div className="outer-box">
                  <ul className="social-box">
                    <li>
                      <div className="profile-icon">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                          alt="Profile"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CustomNavbar;
