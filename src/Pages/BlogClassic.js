import React from 'react';
import Header from '../Components/header';
import BlogCard from '../Components/blogCard';
import Sidebar from '../Components/BlogSidebar';

const BlogClassic = () => {
  const blogs = [
    {
      image: 'images/resource/news-10.jpg',
      link: 'blog-detail.html',
      comments: '02',
      likes: '126',
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Diagnostic Services for Efficient Results Picking Right',
      description: 'There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical',
    },
    {
      image: 'images/resource/news-11.jpg',
      link: 'blog-detail.html',
      comments: '02',
      likes: '126',
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Reasons to Visit for Heart Specialist for the Patient',
      description: 'There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical',
    },
    {
      image: 'images/resource/news-12.jpg',
      link: 'blog-detail.html',
      comments: '02',
      likes: '126',
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Preparing for an ECG Tips From Our Diagnosticians',
      description: 'There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical',
    },
    {
      image: 'images/resource/news-13.jpg',
      link: 'blog-detail.html',
      comments: '02',
      likes: '126',
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Diagnostic Services for Efficient Results Picking Right',
      description: 'There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical',
    },
  ];

  return (
    <>
      <Header head="Latest New By MediTech" content="What We Actually Do?" place="Blog Classic" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="news-classic">
                {blogs.map((blog, index) => (
                 <div className="news-block-two style-two">
                  <BlogCard key={index} {...blog} />
                  </div>
                ))}
                <div className="styled-pagination text-center">
                  <ul className="inner-container clearfix">
                    <li className="prev"><a href="#" className="active"><i className="flaticon-left-arrow"></i> Prev</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li className="active"><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li className="next"><a href="#" className="active">Next <i className="flaticon-right-arrow-1"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogClassic;
