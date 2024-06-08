import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import WOW from 'wowjs';

function HomeServices () {

	// useEffect(() => {
	// 	new WOW.WOW().init();
	// }, []);
    return (
        <section class="services-section">
		<div class="auto-container">
			
			
			<div class="sec-title centered">
				<h2>Best Health Services</h2>
				<div class="separator"></div>
			</div>
			
			<div class="row clearfix">
			
				{/* <!-- Left Column --> */}
				<div class="left-column pull-left col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						
						
						<div class="service-block">
							<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div class="icon-box">
									<span class="icon flaticon-doctor-stethoscope"></span>
								</div>
								<h3><Link to="#">Outdoor Checkup</Link></h3>
								<div class="text">We provide best service for our cline. <br/> Now place take it.</div>
							</div>
						</div>
						
						
						<div class="service-block">
							<div class="inner-box wow fadeInLeft" data-wow-delay="250ms" data-wow-duration="1500ms">
								<div class="icon-box">
									<span class="icon flaticon-operating-room"></span>
								</div>
								<h3><Link to="#">Operation Theater</Link></h3>
								<div class="text">We provide best service for our cline. Now place take it.</div>
							</div>
						</div>
						
						
						<div class="service-block">
							<div class="inner-box wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms">
								<div class="icon-box">
									<span class="icon flaticon-van"></span>
								</div>
								<h3><Link to="#">Emergency Care</Link></h3>
								<div class="text">We provide best service for our cline. <br/> Now place take it.</div>
							</div>
						</div>
						
					</div>
				</div>
				
				
				<div class="circles-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						
						<div class="circles">
							<div class="circle-one"></div>
							<div class="circle-two"></div>
							<div class="circle-three"></div>
						</div>
						
					</div>
				</div>
				
				
				<div class="right-column pull-right col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						
						
						<div class="service-block-two">
							<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
								<div class="icon-box">
									<span class="icon flaticon-water"></span>
								</div>
								<h3><Link to="#">Blood Test</Link></h3>
								<div class="text">We provide best service for our cline. <br/> Now place take it.</div>
							</div>
						</div>
						
						
						<div class="service-block-two">
							<div class="inner-box wow fadeInRight" data-wow-delay="250ms" data-wow-duration="1500ms">
								<div class="icon-box">
									<span class="icon flaticon-pharmacy"></span>
								</div>
								<h3><Link to="#">Pharmacy Support</Link></h3>
								<div class="text">We provide best service for our cline. Now place take it.</div>
							</div>
						</div>
						
						
						<div class="service-block-two">
							<div class="inner-box wow fadeInRight" data-wow-delay="500ms" data-wow-duration="1500ms">
								<div class="icon-box">
									<span class="icon flaticon-nurse"></span>
								</div>
								<h3><Link to="#">24/7 Service</Link></h3>
								<div class="text">We provide best service for our cline. <br/> Now place take it.</div>
							</div>
						</div>
						
					</div>
				</div>
			
			</div>
			
		</div>
	</section>
      
    );
  };
  
  export default HomeServices;