import React from "react";
import { Link } from "react-router-dom";

const Home_Header = () => {
  return (
    <div>
      <header className="main-header header-style-three">
        {/* <!-- Header Upper --> */}
        <div className="header-upper">
          <div className="inner-container clearfix d-flex">
            {/* <!-- Info --> */}
            <div className="logo-outer">
              <div className="logo">
                <Link to="/"><img src="images/logo-3.png" alt="" title="" /></Link>
              </div>
            </div>

            {/* <!-- Nav Box --> */}
            <div className="nav-outer clearfix">
              {/* <!-- Mobile Navigation Toggler For Mobile --> */}
              {/* <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div> */}
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="navbar-header">
                  {/* <!-- Toggle Button --> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon flaticon-menu"></span>
                  </button>
                </div>

                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current"><Link to="/">Home</Link></li>
                    <li className="dropdown">
                      <Link to="#">About us</Link>
                      <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/ourTeam">Our Team</Link></li>
                        <li><Link to="/faq">Faq</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        {/* <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/coming-soon">Coming Soon</Link></li> */}
                      </ul>
                    </li>
                    <li className="dropdown has-mega-menu"><Link to="#">Pages</Link>
                      <div className="mega-menu">
                        <div className="mega-menu-bar row clearfix">
                          <div className="column col-md-3 col-xs-12">
                            <h3>About Us</h3>
                            <ul>
                              <li><Link to="/about">About Us</Link></li>
                              <li><Link to="/ourTeam">Our Team</Link></li>
                              <li><Link to="/faq">Faq</Link></li>
                              <li><Link to="/services">Services</Link></li>
                            </ul>
                          </div>
                          <div className="column col-md-3 col-xs-12">
                            <h3>Doctors</h3>
                            <ul>
                              <li><Link to="/doctors">Doctors</Link></li>
                              <li><Link to="/doctors-detail">Doctors Detail</Link></li>
                            </ul>
                          </div>
                          <div className="column col-md-3 col-xs-12">
                            <h3>Blog</h3>
                            <ul>
                              <li><Link to="/blog">Our Blog</Link></li>
                              <li><Link to="/blog-classic">Blog Classic</Link></li>
                              <li><Link to="/blog-detail">Blog Detail</Link></li>
                            </ul>
                          </div>
                          {/* <div className="column col-md-3 col-xs-12">
                            <h3>Shops</h3>
                            <ul>
                              <li><Link to="/shop">Shop</Link></li>
                              <li><Link to="/shop-single">Shop Details</Link></li>
                              <li><Link to="/shopping-cart">Cart Page</Link></li>
                              <li><Link to="/checkout">Checkout Page</Link></li>
                            </ul>
                          </div> */}
                        </div>
                      </div>
                    </li>
                    <li className="dropdown"><Link to="#">Doctors</Link>
                      <ul>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/doctors-detail">Doctors Detail</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown"><Link to="#">Department</Link>
                      <ul>
                        <li><Link to="/department">Department</Link></li>
                        <li><Link to="/department-detail">Department Detail</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown"><Link to="#">Blog</Link>
                      <ul>
                        <li><Link to="/blog">Our Blog</Link></li>
                        <li><Link to="/blog-classic">Blog Classic</Link></li>
                        <li><Link to="/blog-detail">Blog Detail</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown"><Link to="#">Shop</Link>
                      <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/shop-single">Shop Details</Link></li>
                        <li><Link to="/shopping-cart">Cart Page</Link></li>
                        <li><Link to="/checkout">Checkout Page</Link></li>
                      </ul>
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </nav>
              {/* <!-- Main Menu End--> */}

              {/* <!-- Main Menu End--> */}
              <div className="outer-box clearfix">
                {/* <!-- Main Menu End--> */}
                <div className="nav-box">
                  <div className="nav-btn nav-toggler navSidebar-button"><span className="icon flaticon-menu-1"></span></div>
                </div>

                {/* <!-- Social Box --> */}
                <ul className="social-box clearfix">
                  <li><Link to="#"><span className="fab fa-facebook-f"></span></Link></li>
                  <li><Link to="#"><span className="fab fa-google"></span></Link></li>
                  <li><Link to="#"><span className="fab fa-twitter"></span></Link></li>
                  {/* <li><Link to="#"><span className="fab fa-skype"></span></Link></li> */}
                  <li><Link to="#"><span className="fab fa-linkedin-in"></span></Link></li>
                </ul>

                {/* <!-- Search Btn --> */}
                <div className="search-box-btn"><span className="icon flaticon-search"></span></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* <!--Sticky Header--> */}
        <div className="sticky-header">
          <div className="auto-container clearfix">
            {/* <!--Logo--> */}
            <div className="logo pull-left">
              <Link to="/" className="img-responsive"><img src="images/logo-small.png" alt="" title="" /></Link>
            </div>

            {/* <!--Right Col--> */}
            <div className="right-col pull-right">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                  <ul className="navigation clearfix"></ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn"><span className="icon far fa-window-close"></span></div>

          <nav className="menu-box">
            <div className="nav-logo"><Link to="/"><img src="images/nav-logo.png" alt="" title="" /></Link></div>

            <ul className="navigation clearfix"></ul>
          </nav>
        </div>
      </header>

      <section className="main-slider-three">
        <div className="banner-carousel">
          {/* <!-- Swiper --> */}
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="auto-container">
                <div className="row clearfix">
                  {/* <!-- Content Column --> */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Your Most Trusted Health Partner For Life.</h2>
                      <div className="text">We offer free consulting and the best project management for your ideas, 100% delivery guaranteed.</div>
                      <div className="btn-box">
                        <Link to="/contact" className="theme-btn appointment-btn"><span className="txt">Appointment</span></Link>
                        <Link to="/services" className="theme-btn services-btn">Services</Link>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Image Column --> */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="images/main-slider/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="auto-container">
                <div className="row clearfix">
                  {/* <!-- Content Column --> */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Your Most Trusted Health Partner For Life.</h2>
                      <div className="text">We offer free consulting and the best project management for your ideas, 100% delivery guaranteed.</div>
                      <div className="btn-box">
                        <Link to="/contact" className="theme-btn appointment-btn"><span className="txt">Appointment</span></Link>
                        <Link to="/services" className="theme-btn services-btn">Services</Link>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Image Column --> */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="images/main-slider/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="auto-container">
                <div className="row clearfix">
                  {/* <!-- Content Column --> */}
                  <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h2>Your Most Trusted Health Partner For Life.</h2>
                      <div className="text">We offer free consulting and the best project management for your ideas, 100% delivery guaranteed.</div>
                      <div className="btn-box">
                        <Link to="/contact" className="theme-btn appointment-btn"><span className="txt">Appointment</span></Link>
                        <Link to="/services" className="theme-btn services-btn">Services</Link>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Image Column --> */}
                  <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <div className="image">
                        <img src="images/main-slider/3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </div>
  );
};

export default Home_Header;
