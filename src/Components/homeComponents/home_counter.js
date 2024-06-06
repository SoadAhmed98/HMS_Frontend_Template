import React from "react";
import CountBox from './count-box';

const HomeCounter = () => {
  return (

    <section className="counter-section-two">
		<div className="auto-container">
		
			
			<div className="fact-counter-two">
				<div className="row clearfix">

					<div className="column counter-column col-lg-3 col-md-6 col-sm-12">
						<div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="icon-box">
									<span className="icon flaticon-heart-1"></span>
								</div>
								<CountBox initialValue={0} targetValue={98} text="%"/>
								{/* <div className="count-outer count-box">
									<span className="count-text" data-speed="2500" data-stop="98">0</span>%
								</div> */}
								<h4 className="counter-title">Success Surgeries</h4>
							</div>
						</div>
					</div>

					<div className="column counter-column col-lg-3 col-md-6 col-sm-12">
						<div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="icon-box">
									<span className="icon flaticon-medical-stethoscope-variant"></span>
								</div>
								<CountBox initialValue={0} targetValue={350} text="+"/>

								{/* <div className="count-outer count-box alternate">
									<span className="count-text" data-speed="3000" data-stop="350">0</span>+
								</div> */}
								<h4 className="counter-title">Regular Doctors</h4>
							</div>
						</div>
					</div>

					<div className="column counter-column col-lg-3 col-md-6 col-sm-12">
						<div className="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="icon-box">
									<span className="icon flaticon-heart-1"></span>
								</div>
								<CountBox initialValue={0} targetValue={600} text="K"/>

								{/* <div className="count-outer count-box">
									<span className="count-text" data-speed="3000" data-stop="600">0</span>K
								</div> */}
								<h4 className="counter-title">Satisfied Patients</h4>
							</div>
						</div>
					</div>
					
					<div className="column counter-column col-lg-3 col-md-6 col-sm-12">
						<div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
							<div className="content">
								<div className="icon-box">
									<span className="icon flaticon-pharmacy"></span>
								</div>
								<CountBox initialValue={0} targetValue={50} text="+"/>

								{/* <div className="count-outer count-box">
									<span className="count-text" data-speed="2500" data-stop="50">0</span>+
								</div> */}
								<h4 className="counter-title">Department</h4>
							</div>
						</div>
					</div>

				</div>
			</div>
			
		</div>
	</section>
    
  );
};

export default HomeCounter;
