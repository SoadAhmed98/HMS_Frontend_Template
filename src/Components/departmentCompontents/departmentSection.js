import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const departments = [
  {
    title: 'Urology',
    description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim.',
    iconClass: 'flaticon-kidneys',
    id: 1,
  },
  {
    title: 'Neurology',
    description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim.',
    iconClass: 'flaticon-brain',
    id: 2,
  },
  {
    title: 'Gastrology',
    description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim.',
    iconClass: 'flaticon-kidneys',
    id: 3,
  },
  {
    title: 'Gastrology',
    description: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim.',
    iconClass: 'flaticon-kidneys',
    id: 3,
  },
  // Add more department objects as needed
];

const DepartmentSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="department-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>Health Department</h2>
          <div className="separator"></div>
        </div>

        <Slider {...settings} className="services-carousel owl-carousel owl-theme">
          {departments.map((dept, index) => (
            <div key={index} className="department-block wow fadeInLeft" data-wow-delay={dept.delay} data-wow-duration="1500ms">
              <div className="inner-box m-3">
                <div className="upper-box">
                  <div className={`icon ${dept.iconClass}`}></div>
                  <h3><a href={dept.link}>{dept.title}</a></h3>
                </div>
                <div className="text">{dept.description}</div>
                <div className="read-outer">
                <Link to={`/department-detail/${dept.id}`}  className="read-more">
                    Read More <span className="icon fas fa-angle-double-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DepartmentSection;
