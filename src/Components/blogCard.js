import React from 'react';

const BlogCard = ({ image, link, comments, likes, date, author, title, description }) => {
  return (
      <div className="inner-box">
        <div className="image">
          <a className="no-decoration" href={link}><img src={image} alt={title} /></a>
        </div>
        <div className="lower-content">
          <div className="content">
            <ul className="post-info px-3">
              <li><span className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span> {comments}</li>
              <li><span className="icon flaticon-heart"></span> {likes}</li>
            </ul>
            <ul className="post-meta">
              <li>{date}</li>
              <li>Post By: {author}</li>
            </ul>
            <h3><a href={link}>{title}</a></h3>
            <div className="text">{description}</div>
            <a href={link} className="theme-btn btn-style-five no-decoration"><span className="txt">read more</span></a>
          </div>
        </div>
      </div>
  );
};

export default BlogCard;
