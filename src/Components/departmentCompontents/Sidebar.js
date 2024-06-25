import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = (props) => {
  const [departments, setDepartments] = useState([]);

  const [activeTab, setActiveTab] = useState(props.id);


  useEffect(()=>{
    //call Api with axios method
    
    // axios.get(`http://localhost/api/departments`)
    axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/departments`)

    .then(res =>{ 
      console.log(res.data)
      setDepartments(res.data)
        
    })
    .catch(err => console.log(err))

},[])

  return (
    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
      <aside className="sidebar">
        <div className="sidebar-widget sidebar-blog-category">
          <ul className="blog-cat">
          {departments.length === 0 ? (
                  <h1>There are no departments in the database</h1>
                ) : (
                  departments.map((department) => (
                    <li 
                      key={department.id} 
                      className={`${activeTab === department.id ? "active" : ""}`} 
                      onClick={() => setActiveTab(department.id)}
                    >
                      <Link to={`/department-detail/${department.id}`}>{department.name}</Link>
                    </li>
                  ))
                )}
            {/* <li><a href="services.html">All Departments</a></li> */}
            {/* <li className="active"><a href="department-detail.html">Urology Department</a></li>
            <li><a href="department-detail.html">Neurology Department</a></li>
            <li><a href="department-detail.html">Gastrology Department</a></li>
            <li><a href="department-detail.html">Cardiology Department</a></li>
            <li><a href="department-detail.html">Eye Care Department</a></li> */}
            {/* <li><a href="department-detail.html">Dental Care Department</a></li> */}
          </ul>
        </div>
        <div className="sidebar-widget need-help">
          <h3>Need Help ?</h3>
          <p>Please feel free to contact us. We will get back to you. Or just call us now</p>
          <ul>
            <li><i className="fa fa-tty"></i> +0 000000 0000</li>
            <li><i className="far fa-envelope"></i> <a href="#">mail@meditech.com</a></li>
          </ul>
        </div>
        <div className="sidebar-widget brochure-widget">
          <div className="widget-content">
            <div className="sidebar-title">
              <h2>Our Brochure</h2>
              <div className="separator"></div>
            </div>
            <ul className="brochures">
              <li><a href="#"><span className="icon far fa-file-pdf"></span>Download PDF File</a></li>
              <li><a href="#"><span className="icon far fa-file-word"></span>Download Doc File</a></li>
              <li><a href="#"><span className="icon far fa-file-excel"></span>Download Excel File</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
