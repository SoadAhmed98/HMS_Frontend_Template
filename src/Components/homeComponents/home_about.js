import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomeAbout = () => {
  return (
    <section class="about-section">
		<div class="auto-container">
			<div class="row clearfix">
			
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="sec-title">
							<h2>About Our Hospital</h2>
							<div class="separator"></div>
						</div>
						<div class="bold-text">Better health care with efficient cost is the main focuse of our hospital.</div>
						<div class="text">Our main long-term goal is always achieving complex results for your dental health.  But in the process, we also keep the focus on giving you the best customer service. We're always making our dental office as safe place as possible!</div>
						<Link to="/about" class="theme-btn btn-style-two"><span class="txt">Learn More</span></Link>
					</div>
				</div>
				
				<div class="blocks-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="row clearfix">
							
							{/* <!-- Service Block Five --> */}
							<div class="service-block-five col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box clearfix wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-award"></span>
									</div>
									<h4>Medical Quality</h4>
									<div class="text">We provide best service for our cline. Now place take it.</div>
								</div>
							</div>
							
							{/* <!-- Service Block Five --> */}
							<div class="service-block-five col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box clearfix wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-operating-room"></span>
									</div>
									<h4>Modern Labs</h4>
									<div class="text">We provide best service for our cline. Now place take it.</div>
								</div>
							</div>
							
							{/* <!-- Service Block Five --> */}
							<div class="service-block-five col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box clearfix wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-avatar-1"></span>
									</div>
									<h4>24/7 Dedicated Doctors</h4>
									<div class="text">We provide best service for our cline. Now place take it.</div>
								</div>
							</div>
							
							{/* <!-- Service Block Five --> */}
							<div class="service-block-five col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box clearfix wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-surgery-room"></span>
									</div>
									<h4>Cutting Edge Technology</h4>
									<div class="text">We provide best service for our cline. Now place take it.</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			
			</div>
		</div>
	</section>
   
  );
};

export default HomeAbout;
