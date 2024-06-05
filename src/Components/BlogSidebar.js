import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
      <aside className="sidebar">

        <div className="sidebar-widget search-box">
          <form method="post" action="contact.html">
            <div className="form-group">
              <input type="search" name="search-field" value="" placeholder="Search..." required />
              <button type="submit"><span className="icon fa fa-search"></span></button>
            </div>
          </form>
        </div>

        <div className="sidebar-widget categories-blog">
          <div className="sidebar-title px-5">
            <h2>Best Categories</h2>
            <div className="separator"></div>
          </div>
          <ul>
            <li><a className="no-decoration"href="#">Body Surgery <span>05</span></a></li>
            <li><a className="no-decoration"href="#">Dental Care <span>12</span></a></li>
            <li><a className="no-decoration"href="#">Eye Care <span>35</span></a></li>
            <li><a className="no-decoration"href="#">Blood Cancer <span>25</span></a></li>
            <li><a className="no-decoration"href="#">Neurology Surgery <span>65</span></a></li>
            <li><a className="no-decoration"href="#">Health Care <span>12</span></a></li>
          </ul>
        </div>

        <div className="sidebar-widget popular-posts px-5">
          <div className="sidebar-title">
            <h2>Recent Posts</h2>
            <div className="separator"></div>
          </div>
          <div className="widget-content">
            <article className="post">
              <div className="post-thumb"><a className="no-decoration"href="blog-detail.html"><img src="images/resource/post-thumb-1.jpg" alt="" /></a></div>
              <h3><a className="no-decoration"href="blog-detail.html">Integrative Medicine And Cancer Treatment</a></h3>
              <span className="date">Dec. 20,  2017</span>
            </article>
            <article className="post">
              <div className="post-thumb"><a className="no-decoration"href="blog-detail.html"><img src="images/resource/post-thumb-4.jpg" alt="" /></a></div>
              <h3><a className="no-decoration"href="blog-detail.html">Achieving Better Health Care One Patient at a Time</a></h3>
              <span className="date">Dec. 20,  2017</span>
            </article>
            <article className="post">
              <div className="post-thumb"><a className="no-decoration"href="blog-detail.html"><img src="images/resource/post-thumb-5.jpg" alt="" /></a></div>
              <h3><a className="no-decoration"href="blog-detail.html">Doctor Appointment for the Client to check up.</a></h3>
              <span className="date">Dec. 20,  2017</span>
            </article>
          </div>
        </div>

        <div className="sidebar-widget categories-blog">
          <div className="sidebar-title px-5">
            <h2>Archives</h2>
            <div className="separator"></div>
          </div>
          <ul>
            <li><a className="no-decoration"href="#">February 2019</a></li>
            <li><a className="no-decoration"href="#">January 2019</a></li>
            <li><a className="no-decoration"href="#">December 2018</a></li>
          </ul>
        </div>

        <div className="sidebar-widget gallery-widget px-5">
          <div className="sidebar-title">
            <h2>Gallery</h2>
            <div className="separator"></div>
          </div>
          <div className="gallery-outer clearfix">
            <figure className="image">
              <a href="images/resource/news-1.jpg" className="lightbox-image no-decoration" title="Image Title Here"><img src="images/resource/gw-1.jpg" alt="" /></a>
            </figure>
            <figure className="image">
              <a href="images/resource/news-2.jpg" className="lightbox-image no-decoration" title="Image Title Here"><img src="images/resource/gw-2.jpg" alt="" /></a>
            </figure>
            <figure className="image">
              <a href="images/resource/news-3.jpg" className="lightbox-image no-decoration" title="Image Title Here"><img src="images/resource/gw-3.jpg" alt="" /></a>
            </figure>
            <figure className="image">
              <a href="images/resource/news-4.jpg" className="lightbox-image no-decoration" title="Image Title Here"><img src="images/resource/gw-4.jpg" alt="" /></a>
            </figure>
            <figure className="image">
              <a href="images/resource/news-5.jpg" className="lightbox-image no-decoration" title="Image Title Here"><img src="images/resource/gw-5.jpg" alt="" /></a>
            </figure>
            <figure className="image">
              <a href="images/resource/news-6.jpg" className="lightbox-image no-decoration" title="Image Title Here"><img src="images/resource/gw-6.jpg" alt="" /></a>
            </figure>
          </div>
        </div>

        <div className="sidebar-widget tags">
          <div className="sidebar-title px-5">
            <h2>Cool Tags</h2>
            <div className="separator"></div>
          </div>
          <ul className="tag-list clearfix">
            <li><a className="no-decoration"href="#">Blood</a></li>
            <li><a className="no-decoration"href="#">Eye Care</a></li>
            <li><a className="no-decoration"href="#">Care</a></li>
            <li><a className="no-decoration"href="#">Body Surgery</a></li>
            <li><a className="no-decoration"href="#">Dental</a></li>
            <li><a className="no-decoration"href="#">Diabetes</a></li>
            <li><a className="no-decoration"href="#">Appointment</a></li>
          </ul>
        </div>

      </aside>
    </div>
  );
};

export default Sidebar;
