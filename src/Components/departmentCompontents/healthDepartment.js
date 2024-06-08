import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DepartmentSec = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const departments = [
    {
      title: 'Urology Depart',
      description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem.',
      imageUrl: 'images/resource/department-1.jpg',
      link: 'blog-single.html',
    },
    {
      title: 'Neurology Depart',
      description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem.',
      imageUrl: 'images/resource/department-2.jpg',
      link: 'blog-single.html',
    },
    {
      title: 'Gastrology Depart',
      description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem.',
      imageUrl: 'images/resource/department-3.jpg',
      link: 'blog-single.html',
    },
    // Add more department objects as needed
  ];

  return (
    <section className="department-section-two style-two">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>Health Department</h2>
          <div className="separator"></div>
        </div>

        <Slider {...settings} className="three-item-carousel owl-carousel owl-theme">
          {departments.map((dept, index) => (
            <div key={index} className="department-block-two ">
              <div className="inner-box">
                <div className="image m-3">
                  <a href={dept.link}>
                    <img src={dept.imageUrl} alt={dept.title} />
                  </a>
                </div>
                <div className="lower-content">
                  <h3>
                    <a href={dept.link}>{dept.title}</a>
                  </h3>
                  <div className="text">{dept.description}</div>
                  <a href={dept.link} className="read-more">
                    Read More <span className="arrow fas fa-angle-double-right"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DepartmentSec;
