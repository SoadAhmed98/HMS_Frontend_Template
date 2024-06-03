import React from "react";

const HomeDepartment = () => {
  return (

    <section class="department-section-three">
		<div class="image-layer" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
		<div class="auto-container">
			{/* <!-- Department Tabs--> */}
            <div class="department-tabs tabs-box">
				<div class="row clearfix">
                	{/* <!--Column--> */}
                    <div class="col-lg-4 col-md-12 col-sm-12">
						{/* <!-- Sec Title --> */}
						<div class="sec-title light">
							<h2>Health <br/> Department</h2>
							<div class="separator"></div>
						</div>
                        {/* <!--Tab Btns--> */}
                        <ul class="tab-btns tab-buttons clearfix">
                            <li data-tab="#tab-urology" class="tab-btn">Urology Department</li>
                            <li data-tab="#tab-department" class="tab-btn active-btn">Neurology Department</li>
                            <li data-tab="#tab-gastrology" class="tab-btn">Gastrology Department</li>
							<li data-tab="#tab-cardiology" class="tab-btn">Cardiology Department</li>
							<li data-tab="#tab-eye" class="tab-btn">Eye Care Department</li>
                        </ul>
                    </div>
                    {/* <!--Column--> */}
                    <div class="col-lg-8 col-md-12 col-sm-12">
                    	{/* <!--Tabs Container--> */}
                        <div class="tabs-content">
                        
                            {/* <!-- Tab --> */}
                            <div class="tab" id="tab-urology">
                            	<div class="content">
									<h2>Urology Department</h2>
									<div class="title">Department of Neurology</div>
									<div class="text">
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
										<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
									</div>
									<div class="two-column row clearfix">
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>01 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>02 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
									</div>
									<a href="doctors-detail.html" class="theme-btn btn-style-two"><span class="txt">View More</span></a>
								</div>
							</div>
							
							{/* <!-- Tab --> */}
                            <div class="tab active-tab" id="tab-department">
                            	<div class="content">
									<h2>Neurology Department</h2>
									<div class="title">Department of Neurology</div>
									<div class="text">
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
										<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
									</div>
									<div class="two-column row clearfix">
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>01 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>02 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
									</div>
									<a href="doctors-detail.html" class="theme-btn btn-style-two"><span class="txt">View More</span></a>
								</div>
							</div>
							
							{/* <!-- Tab --> */}
                            <div class="tab" id="tab-gastrology">
                            	<div class="content">
									<h2>Gastrology Department</h2>
									<div class="title">Department of Neurology</div>
									<div class="text">
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
										<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
									</div>
									<div class="two-column row clearfix">
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>01 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>02 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
									</div>
									<a href="doctors-detail.html" class="theme-btn btn-style-two"><span class="txt">View More</span></a>
								</div>
							</div>
							
							{/* <!-- Tab --> */}
                            <div class="tab" id="tab-cardiology">
                            	<div class="content">
									<h2>Cardiology Department</h2>
									<div class="title">Department of Neurology</div>
									<div class="text">
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
										<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
									</div>
									<div class="two-column row clearfix">
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>01 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>02 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
									</div>
									<a href="doctors-detail.html" class="theme-btn btn-style-two"><span class="txt">View More</span></a>
								</div>
							</div>
							
							{/* <!-- Tab --> */}
                            <div class="tab" id="tab-eye">
                            	<div class="content">
									<h2>Eye Care Department</h2>
									<div class="title">Department of Neurology</div>
									<div class="text">
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
										<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
									</div>
									<div class="two-column row clearfix">
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>01 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
										<div class="column col-lg-6 col-md-6 col-sm-12">
											<h3>02 - Neurology Service</h3>
											<div class="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
										</div>
									</div>
									<a href="doctors-detail.html" class="theme-btn btn-style-two"><span class="txt">View More</span></a>
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

export default HomeDepartment;
