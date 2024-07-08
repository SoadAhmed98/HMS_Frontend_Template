import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const HomeDepartment = () => {
  const [departments, setDepartments] = useState([]);

    const [activeTab, setActiveTab] = useState(1);

  useEffect(()=>{
    //call Api with axios method
    
    axios.get(`http://localhost/api/departments`)
    // axios.get(`https://b43c1a73-82c8-4103-8569-c1e7e6a160cd.mock.pstmn.io/departments`)
    // axios.get(`departments`)

    .then(res =>{ 
      console.log(res.data)
      setDepartments(res.data)
      
        
    })
    .catch(err => console.log(err))

},[])

  // const tabs = [
  //   { id: "#tab-urology", title: "Urology Department", content: "Department of Urology" },
  //   { id: "#tab-department", title: "Neurology Department", content: "Department of Neurology" },
  //   { id: "#tab-gastrology", title: "Gastrology Department", content: "Department of Gastrology" },
  //   { id: "#tab-cardiology", title: "Cardiology Department", content: "Department of Cardiology" },
  //   { id: "#tab-eye", title: "Eye Care Department", content: "Department of Eye" },
  // ];

  return (
    <section className="department-section-three">
      <div className="image-layer " style={{ backgroundClor:"#004cd9" }}></div>
      <div className="auto-container">
        {/* Department Tabs */}
        <div className="department-tabs tabs-box">
          <div className="row clearfix">
            {/* Column */}
            <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              {/* Sec Title */}
              <div className="sec-title light">
                <h2>Health <br /> Department</h2>
                <div className="separator"></div>
              </div>
              {/* Tab Buttons */}
              {/* <ul className="tab-btns tab-buttons clearfix">
                {departments ===null ? <><h1>There are no departments in database</h1></>:
                {departments.map((department) => (
                  <li 
                    key={department.id} 
                    className={`tab-btn ${activeTab === department.id ? "active-btn" : ""}`} 
                    onClick={() => setActiveTab(department.id)}
                  >
                    {department.name}
                  </li>
                ))}}
              </ul> */}
              <ul className="tab-btns tab-buttons clearfix">
                {departments.length === 0 ? (
                  <h1></h1>
                ) : (
                  departments.map((department) => (
                    <li 
                      key={department.id} 
                      className={`tab-btn ${activeTab === department.id ? "active-btn" : ""}`} 
                      onClick={() => setActiveTab(department.id)}
                    >
                      {department.name}
                    </li>
                  ))
                )}
              </ul>

            </div>

            {/* Column */}
            <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
              {/* Tabs Container */}
              <div className="tabs-content">
                {departments.map((department) => (
                  <div key={department.id} className={`tab ${activeTab === department.id ? "active-tab" : ""}`} id={department.id}>
                    <div className="content">
                      <h2>{department.name} Department</h2>
                      <div className="title">Department of {department.name}</div>
                      <div className="text">
                        <p>{department.description}</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p> */}
                      </div>
                      <div className="two-column row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <h3>01 - {department.name} Service</h3>
                          <div className="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <h3>02 - {department.name} Service</h3>
                          <div className="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
                        </div>
                      </div>
                      <Link to={`/department-detail/${department.id}`} className="theme-btn btn-style-two"><span className="txt">View More</span></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDepartment;
