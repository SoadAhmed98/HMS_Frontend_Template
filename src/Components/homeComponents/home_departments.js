import React, { useState } from "react";

const HomeDepartment = () => {
  const [activeTab, setActiveTab] = useState("#tab-department");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="department-section-three">
      <div className="image-layer" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
      <div className="auto-container">
        {/* <!-- Department Tabs--> */}
        <div className="department-tabs tabs-box">
          <div className="row clearfix">
            {/* <!--Column--> */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              {/* <!-- Sec Title --> */}
              <div className="sec-title light">
                <h2>Health <br /> Department</h2>
                <div className="separator"></div>
              </div>
              {/* <!--Tab Btns--> */}
              <ul className="tab-btns tab-buttons clearfix">
                <li 
                  className={`tab-btn ${activeTab === "#tab-urology" ? "active-btn" : ""}`} 
                  onClick={() => handleTabClick("#tab-urology")}
                >
                  Urology Department
                </li>
                <li 
                  className={`tab-btn ${activeTab === "#tab-department" ? "active-btn" : ""}`} 
                  onClick={() => handleTabClick("#tab-department")}
                >
                  Neurology Department
                </li>
                <li 
                  className={`tab-btn ${activeTab === "#tab-gastrology" ? "active-btn" : ""}`} 
                  onClick={() => handleTabClick("#tab-gastrology")}
                >
                  Gastrology Department
                </li>
                <li 
                  className={`tab-btn ${activeTab === "#tab-cardiology" ? "active-btn" : ""}`} 
                  onClick={() => handleTabClick("#tab-cardiology")}
                >
                  Cardiology Department
                </li>
                <li 
                  className={`tab-btn ${activeTab === "#tab-eye" ? "active-btn" : ""}`} 
                  onClick={() => handleTabClick("#tab-eye")}
                >
                  Eye Care Department
                </li>
              </ul>
            </div>
            {/* <!--Column--> */}
            <div className="col-lg-8 col-md-12 col-sm-12">
              {/* <!--Tabs Container--> */}
              <div className="tabs-content">
                {/* <!-- Tab --> */}
                <div className={`tab ${activeTab === "#tab-urology" ? "active-tab" : ""}`} id="tab-urology">
                  <div className="content">
                    <h2>Urology Department</h2>
                    <div className="title">Department of Urology</div>
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

                {/* <!-- Tab --> */}
                <div className={`tab ${activeTab === "#tab-department" ? "active-tab" : ""}`} id="tab-department">
                  <div className="content">
                    <h2>Neurology Department</h2>
                    <div className="title">Department of Neurology</div>
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

                {/* <!-- Tab --> */}
                <div className={`tab ${activeTab === "#tab-gastrology" ? "active-tab" : ""}`} id="tab-gastrology">
                  <div className="content">
                    <h2>Gastrology Department</h2>
                    <div className="title">Department of Gastrology</div>
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

                {/* <!-- Tab --> */}
                <div className={`tab ${activeTab === "#tab-cardiology" ? "active-tab" : ""}`} id="tab-cardiology">
                  <div className="content">
                    <h2>Cardiology Department</h2>
                    <div className="title">Department of Cardiology</div>
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

                {/* <!-- Tab --> */}
                <div className={`tab ${activeTab === "#tab-eye" ? "active-tab" : ""}`} id="tab-eye">
                  <div className="content">
                    <h2>Eye Care Department</h2>
                    <div className="title">Department of Eye</div>
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDepartment;
