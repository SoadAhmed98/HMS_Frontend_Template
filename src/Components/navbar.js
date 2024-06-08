import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Import your CSS file

const Navbar = () => {
  

  

  return (
    <header className="main-header">

        {/* <!-- Header Upper --> */}
        <div className="header-upper">
            <div className="inner-container">
                <div className="auto-container clearfix">
                    {/* <!--Info--> */}
                    <div className="logo-outer">
                        <div className="logo">
                            <Link to="/">
                            <img src="images/logo/3.png" alt="Logo" title="Logo" style={{width:"16rem",height:"10.5rem"}} classNameName='pb-2'/>

                            </Link></div>
                    </div>

                    {/* <!--Nav Box--> */}
                    <div className="nav-outer clearfix">
                        {/* <!--Mobile Navigation Toggler For Mobile--> */}
                        <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="navbar-header">
                                {/* <!-- Togg le Button -->       */}
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                    {/* <li><Link to="/blog-detail">Blog Detail</Link></li> */}
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
							{/* <!-- Search Btn --> */}
							<div className="search-box-btn"><span className="icon flaticon-search"></span></div>
                            {/* <!-- Button Box --> */}
                            <div className="btn-box">
                                <a href="contact.html" className="theme-btn btn-style-one"><span className="txt">Appointment</span></a>
                            </div>
                        </div>
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
                	<a href="index.html" className="img-responsive"><img src="images/logo-small.png" alt="" title=""/></a>
                </div>
                
				{/* <!--Right Col--> */}
                <div className="right-col pull-right">
					{/* <!-- Main Menu --> */}
                    <nav className="main-menu navbar-expand-md">
                        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                            <ul className="navigation clearfix">
                                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                                </ul>
                        </div>
                    </nav>
                    {/* <!-- Main Menu End--> */}
                </div>
                
            </div>
        </div>
        {/* <!--End Sticky Header--> */}
		
    	{/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><span className="icon far fa-window-close"></span></div>
            
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            <nav className="menu-box">
            	<div className="nav-logo"><a href="index.html"><img src="images/nav-logo.png" alt="" title=""/></a></div>
                
                <ul className="navigation clearfix">
                    {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                    </ul>
            </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

    </header>
  );
};

export default Navbar;
