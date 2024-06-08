import React, { useState } from "react";

const HomeDepartment = () => {
  const [activeTab, setActiveTab] = useState("#tab-department");

  const tabs = [
    { id: "#tab-urology", title: "Urology Department", content: "Department of Urology" },
    { id: "#tab-department", title: "Neurology Department", content: "Department of Neurology" },
    { id: "#tab-gastrology", title: "Gastrology Department", content: "Department of Gastrology" },
    { id: "#tab-cardiology", title: "Cardiology Department", content: "Department of Cardiology" },
    { id: "#tab-eye", title: "Eye Care Department", content: "Department of Eye" },
  ];

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
              <ul className="tab-btns tab-buttons clearfix">
                {tabs.map((tab) => (
                  <li 
                    key={tab.id} 
                    className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`} 
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column */}
            <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
              {/* Tabs Container */}
              <div className="tabs-content">
                {tabs.map((tab) => (
                  <div key={tab.id} className={`tab ${activeTab === tab.id ? "active-tab" : ""}`} id={tab.id}>
                    <div className="content">
                      <h2>{tab.title}</h2>
                      <div className="title">{tab.content}</div>
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                      </div>
                      <div className="two-column row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <h3>01 - Neurology Service</h3>
                          <div className="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <h3>02 - Neurology Service</h3>
                          <div className="column-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</div>
                        </div>
                      </div>
                      <a href="doctors-detail.html" className="theme-btn btn-style-two"><span className="txt">View More</span></a>
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
