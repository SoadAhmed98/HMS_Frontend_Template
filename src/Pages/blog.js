// import React, { useState, useEffect } from 'react';
// import Header from "../Components/header.js";
// import BlogCard from "../Components/blogCard.js";
// import Navbar from "../Components/navbar.js";
// import WOW from 'wowjs';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';

// const Blog = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const postsPerPage = 4;

//   useEffect(() => {
//     new WOW.WOW().init();
//     fetchBlogPosts();
//   }, []);

//   const fetchBlogPosts = async () => {
//     try {
//       const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_4814594df6f76785060eaf879ce92db8062f3&country=eg,ae,gb,us&language=en&category=health`);
//       setBlogPosts(response.data.results);
//     } catch (error) {
//       console.error('Error fetching blog posts:', error);
//     }
//   };

//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   const displayPosts = blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

//   return (
//     <>
//       <Navbar />
//       <Header head="Latest New By MediTech" content="What We Actually Do?" place="Blog" />
//       <section className="blog-page-section">
//         <div className="auto-container">
//           <div className="row clearfix">
//             {displayPosts.map((post, index) => (
//               <div className="news-block-two col-lg-6 col-md-12 col-sm-12" key={index}>
//                 <BlogCard
//                   image={post.image_url}
//                   link={post.link}
//                   date={post.pubDate}
//                   author={post.creator ? post.creator.join(', ') : 'Unknown'}
//                   title={post.title}
//                   description={post.description}
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="styled-pagination text-center">
//             <ReactPaginate
//               previousLabel={"Prev"}
//               nextLabel={"Next"}
//               breakLabel={"..."}
//               pageCount={Math.ceil(blogPosts.length / postsPerPage)}
//               marginPagesDisplayed={2}
//               pageRangeDisplayed={3}
//               onPageChange={handlePageClick}
//               containerClassName={"pagination"}
//               pageClassName={"page-item"}
//               pageLinkClassName={"page-link"}
//               previousClassName={"page-item"}
//               previousLinkClassName={"page-link"}
//               nextClassName={"page-item"}
//               nextLinkClassName={"page-link"}
//               breakClassName={"page-item"}
//               breakLinkClassName={"page-link"}
//               activeClassName={"active"}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;

import React, { useState, useEffect } from 'react';
import Header from "../Components/header.js";
import BlogCard from "../Components/blogCard.js";
import Navbar from "../Components/navbar.js";
import WOW from 'wowjs';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;

  useEffect(() => {
    new WOW.WOW().init();
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_4814594df6f76785060eaf879ce92db8062f3&country=eg,ae,gb,us&language=en&category=health`);
      const filteredPosts = response.data.results.filter(post => post.image_url);
      setBlogPosts(filteredPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayPosts = blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

  // دالة لتقصير النص
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <>
      <Navbar />
      <Header head="Latest New By MediTech" content="What We Actually Do?" place="Blog" />
      <section className="blog-page-section">
        <div className="container">
          <div className="row clearfix">
            {displayPosts.map((post, index) => (
              <div className="news-block-two col-lg-6 col-md-12 col-sm-12" key={index}>
                <BlogCard
                  image={post.image_url}
                  link={post.link}
                  date={post.pubDate}
                  author={post.creator ? post.creator.join(', ') : 'Unknown'}
                  title={post.title}
                  description={truncateText(post.description, 20)} // استخدام الدالة هنا
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(blogPosts.length / postsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link rounded-circle mx-2"} 
              previousClassName={"page-item"}
              previousLinkClassName={"page-link rounded-circle p-3 mx-2"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link rounded-circle p-3 mx-2"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link rounded-circle mx-2"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
