import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function HomeNews () {
    return (
        <section className="news-section">
    	<div className="auto-container">
			{/* <!-- Sec Title --> */}
			<div className="sec-title centered">
				<h2>Latest News & Articals</h2>
				<div className="separator style-three"></div>
			</div>
			<div className="row clearfix">
				
				{/* <!-- News Block --> */}
				<div className="news-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<div className="category">Artical</div>
							<Link to="/blog"><img src="images/article1.jpg" alt="" style={{height:"17rem"}}/></Link>
						</div>
						<div className="lower-content">
							<ul className="post-meta">
								<li><a href="#">03 Comments</a></li>
								<li><a href="#">June 21, 2018 at 8:12pm</a></li>
								<li><a href="#">12 Liks</a></li>
							</ul>
							<h3><a href="blog-detail.html">Diagnostic Services for Efficient Results Picking Right </a></h3>
							<div className="text">There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...</div>
							{/* <a href="blog-detail.html" className="read-more">Read More</a> */}
							<Link to="/blog" className="read-more">Read More</Link>

						</div>
					</div>
				</div>
				
				{/* <!-- News Block --> */}
				<div className="news-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div className="image">
							<div className="category">Artical</div>
							<Link to="/blog"><img src="images/article2.jpg" alt="" style={{height:"17rem"}}/></Link>
						</div>
						<div className="lower-content">
							<ul className="post-meta">
								<li><a href="#">03 Comments</a></li>
								<li><a href="#">June 21, 2018 at 8:12pm</a></li>
								<li><a href="#">12 Liks</a></li>
							</ul>
							<h3><a href="blog-detail.html">Reasons to Visit for Heart Specialist Us</a></h3>
							<div className="text">There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...</div>
							{/* <a href="blog-detail.html" className="read-more">Read More</a>
							 */}
							<Link to="/blog" className="read-more">Read More</Link>

						</div>
					</div>
				</div>
				
				{/* <!-- News Block --> */}
				<div className="news-block col-lg-4 col-md-6 col-sm-12">
					<div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div className="image">
							<div className="category">Artical</div>
							<Link to="/blog"><img src="images/article3.jpg" alt="" style={{height:"17rem"}}/></Link>
						</div>
						<div className="lower-content">
							<ul className="post-meta">
								<li><a href="#">03 Comments</a></li>
								<li><a href="#">June 21, 2018 at 8:12pm</a></li>
								<li><a href="#">12 Liks</a></li>
							</ul>
							<h3><a href="blog-detail.html">Preparing for an ECG Tips From Our Diagnosticians</a></h3>
							<div className="text">There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...</div>
							<Link to="/blog" className="read-more">Read More</Link>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
    );
  };
  
  export default HomeNews;