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
    localStorage.setItem("token", "");
    setIsLoggedIn(false);
    // Redirect to home or login page
    window.location.href = "/";
  };


  return (
    <>
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
                    <NavLink exact className="nav-link allNav" activeClassName="active" to="/" style={{ backgroundColor: 'white' }}>
                      Home
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item dropdown ${activeDropdown === 'about' ? 'show' : ''}`}
                    onClick={() => handleDropdownClick('about')}
                  >
                    <NavLink
                      exact
                      className="nav-link dropdown-toggle allNav"
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
                        <NavLink exact className="dropdown-item allNav" to="/about">
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact className="dropdown-item allNav" to="chatbox">
                          Chat Box
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact className="dropdown-item allNav" to="/ourTeam">
                          Welcome
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item ">
                    <NavLink exact className="nav-link allNav" to="/ourTeam">
                      Doctors
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link allNav" to="/department">
                      Department
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link allNav" to="/packages">
                      Packages
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link allNav" activeClassName="active" to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link allNav" activeClassName="active" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link allNav" activeClassName="active" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item dropdown ${activeDropdown === 'profile' ? 'show' : ''}`}
                    onClick={() => handleDropdownClick('profile')}
                  >
                    {isLoggedIn ? (
                      <NavLink exact
                      className="nav-link dropdown-toggle d-flex align-items-start allNav"
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
                      ref={navDropdownRef}
                    >
                      {isLoggedIn ? (
                        <>
                          <li>
                            <NavLink className="dropdown-item allNav" to="/profile">
                              Profile
                            </NavLink>
                          </li>
                          <li>
                            <button className="dropdown-item allNav" onClick={handleLogout}>
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

    </>
  );
};

export default HomeHeader;
