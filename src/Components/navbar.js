import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Import your CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items
  const menuItems = [
    {
      title: 'Home',
      submenu: [
        { title: 'Home page 01', path: '/' },
        { title: 'Home page 02', path: '/home2' },
        { title: 'Home page 03', path: '/home3' },
        { title: 'Home page 04', path: '/home4' },
        {
          title: 'Header Styles',
          submenu: [
            { title: 'Header Style One', path: '/' },
            { title: 'Header Style Two', path: '/home2' },
            { title: 'Header Style Three', path: '/home3' },
            { title: 'Header Style Four', path: '/home4' },
          ],
        },
      ],
    },
    {
      title: 'About us',
      submenu: [
        { title: 'About Us', path: '/about' },
        { title: 'Our Team', path: '/team' },
        { title: 'Faq', path: '/faq' },
        { title: 'Services', path: '/services' },
        { title: 'Gallery', path: '/gallery' },
        { title: 'Coming Soon', path: '/coming-soon' },
      ],
    },
    {
      title: 'Pages',
      hasMegaMenu: true,
      megaMenu: [
        {
          title: 'About Us',
          items: [
            { title: 'About Us', path: '/about' },
            { title: 'Our Team', path: '/team' },
            { title: 'Faq', path: '/faq' },
            { title: 'Services', path: '/services' },
          ],
        },
        {
          title: 'Doctors',
          items: [
            { title: 'Doctors', path: '/doctors' },
            { title: 'Doctors Detail', path: '/doctors-detail' },
          ],
        },
        {
          title: 'Blog',
          items: [
            { title: 'Our Blog', path: '/blog' },
            { title: 'Blog Classic', path: '/blog-classic' },
            { title: 'Blog Detail', path: '/blog-detail' },
          ],
        },
        {
          title: 'Shops',
          items: [
            { title: 'Shop', path: '/shop' },
            { title: 'Shop Details', path: '/shop-single' },
            { title: 'Cart Page', path: '/shopping-cart' },
            { title: 'Checkout Page', path: '/checkout' },
          ],
        },
      ],
    },
    {
      title: 'Doctors',
      submenu: [
        { title: 'Doctors', path: '/doctors' },
        { title: 'Doctors Detail', path: '/doctors-detail' },
      ],
    },
    {
      title: 'Department',
      submenu: [
        { title: 'Department', path: '/department' },
        { title: 'Department Detail', path: '/department-detail' },
      ],
    },
    {
      title: 'Blog',
      submenu: [
        { title: 'Our Blog', path: '/blog' },
        { title: 'Blog Classic', path: '/blog-classic' },
        { title: 'Blog Detail', path: '/blog-detail' },
      ],
    },
    {
      title: 'Shop',
      submenu: [
        { title: 'Shop', path: '/shop' },
        { title: 'Shop Details', path: '/shop-single' },
        { title: 'Cart Page', path: '/shopping-cart' },
        { title: 'Checkout Page', path: '/checkout' },
      ],
    },
    { title: 'Contact', path: '/contact' },
  ];

  // Function to render the menu items recursively
  const renderMenuItems = (items) => {
    return items.map((item, index) => {
      if (item.submenu) {
        return (
          <li key={index} className="dropdown">
            <Link to={item.path || '#'}>{item.title}</Link>
            <ul>{renderMenuItems(item.submenu)}</ul>
          </li>
        );
      } else if (item.hasMegaMenu) {
        return (
          <li key={index} className="dropdown has-mega-menu">
            <Link to="#">{item.title}</Link>
            <div className="mega-menu">
              <div className="mega-menu-bar row clearfix">
                {item.megaMenu.map((column, idx) => (
                  <div key={idx} className="column col-md-3 col-xs-12">
                    <h3>{column.title}</h3>
                    <ul>{renderMenuItems(column.items)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        );
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const stickyHeader = document.querySelector('.sticky-header');
      if (window.scrollY > 100) {
        stickyHeader.classList.add('active');
      } else {
        stickyHeader.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header">
      {/* Header Top */}
      {/* <div className="header-top">
        <div className="auto-container clearfix">
          <div className="top-left clearfix">
            <ul className="list">
              <li>
                <span className="icon fas fa-envelope"></span>
                2130 Fulton Street San Diego CA 94117-1080 USA
              </li>
              <li>
                <span className="icon fas fa-phone"></span>
                <a href="tel:+555-123-2323">555-123-2323</a>
              </li>
            </ul>
          </div>
          <div className="top-right clearfix">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-google"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-skype"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* End Header Top */}

      {/* Header Upper */}
      <div className="header-upper">
        <div className="inner-container">
          <div className="auto-container clearfix d-flex">
            <div className="logo-outer">
              <div className="logo">
                <Link to="/">
                  <img src="images/logo/3.png" alt="Logo" title="Logo" style={{width:"16rem",height:"10.5rem"}} className='pb-2'/>
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix ">
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="icon flaticon-menu"></span>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMobileMenu}
                  >
                    <span className="icon flaticon-menu"></span>
                  </button>
                </div>

                <div
                  className={`collapse navbar-collapse clearfix ${
                    isMobileMenuOpen ? 'show' : ''
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">{renderMenuItems(menuItems)}</ul>
                </div>
              </nav>

              <div className="outer-box clearfix">
                <div className="search-box-btn">
                  <span className="icon flaticon-search"></span>
                </div>
                <div className="btn-box">
                  <Link to="/contact" className="theme-btn btn-style-one">
                    <span className="txt">Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Upper */}

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <Link to="/" className="img-responsive">
              <img src="images/logo-small.png" alt="Logo" title="Logo" />
            </Link>
          </div>

          <div className="right-col pull-right">
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">{renderMenuItems(menuItems)}</ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End Sticky Header */}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
        <div className="close-btn" onClick={toggleMobileMenu}>
          <span className="icon far fa-window-close"></span>
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/">
              <img src="images/nav-logo.png" alt="Nav Logo" />
            </Link>
          </div>
          <ul className="navigation clearfix">{renderMenuItems(menuItems)}</ul>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default Navbar;
