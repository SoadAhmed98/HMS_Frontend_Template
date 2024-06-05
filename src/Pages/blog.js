import React from 'react';
import Header from "../Components/header.js";
import BlogCard from "../Components/blogCard.js";

const Blog = () => {
  const blogPosts = [
    {
      link: 'blog-detail.html',
      image: 'images/resource/news-4.jpg',
      comments: 2,
      likes: 126,
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Diagnostic Services for Efficient Results Picking Right',
      description: 'There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...',
    },
    {
      link: 'blog-detail.html',
      image: 'images/resource/news-5.jpg',
      comments: 2,
      likes: 126,
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Reasons to Visit for Heart Specialist Department.',
      description: 'There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...',
    },
    {
      link: 'blog-detail.html',
      image: 'images/resource/news-6.jpg',
      comments: 2,
      likes: 126,
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Preparing for an ECG Tips From Our Diagnosticians',
      description: 'There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...',
    },
    {
      link: 'blog-detail.html',
      image: 'images/resource/news-7.jpg',
      comments: 2,
      likes: 126,
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Diagnostic Services for Efficient Results Picking Right',
      description: 'There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...',
    },
    {
      link: 'blog-detail.html',
      image: 'images/resource/news-8.jpg',
      comments: 2,
      likes: 126,
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Reasons to Visit for Heart Specialist Us Today.',
      description: 'There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...',
    },
    {
      link: 'blog-detail.html',
      image: 'images/resource/news-9.jpg',
      comments: 2,
      likes: 126,
      date: 'June 21, 2018 at 8:12pm',
      author: 'Admin',
      title: 'Preparing for an ECG Tips From Our Diagnosticians',
      description: 'There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the ...',
    },
  ];
  
  return (
    <>
      <Header head="Latest New By MediTech" content="What We Actually Do?" place="Blog" />
      <section className="blog-page-section">
        <div className="auto-container">
          <div className="row clearfix">
            {blogPosts.map((post, index) => (
              <div className="news-block-two col-lg-6 col-md-12 col-sm-12">
              <BlogCard
                key={index}
                image={post.image}
                link={post.link}
                comments={post.comments}
                likes={post.likes}
                date={post.date}
                author={post.author}
                title={post.title}
                description={post.description}
              />
              </div>
            ))}
          </div>
          <div className="styled-pagination text-center">
          <ul className="inner-container clearfix">
                    <li className="prev"><a href="#" className="active no-decoration"><i className="flaticon-left-arrow"></i> Prev</a></li>
                    <li><a className="no-decoration"href="#">1</a></li>
                    <li><a className="no-decoration"href="#">2</a></li>
                    <li className="active"><a className="no-decoration"href="#">3</a></li>
                    <li><a className="no-decoration" href="#">4</a></li>
                    <li><a className="no-decoration"href="#">5</a></li>
                    <li className="next"><a href="#" className="active no-decoration">Next <i className="flaticon-right-arrow-1"></i></a></li>
                  </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
