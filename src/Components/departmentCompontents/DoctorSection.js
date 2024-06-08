import React, { useState } from 'react';
import DoctorTab from './SubDoctorSection';

const DoctorsSection = () => {
  const [activeTab, setActiveTab] = useState('doctor-tab-1');

  return (
    <section className="doctors-section style-three">
      <div className="auto-container">
        <div className="doctors-tabs tabs-box">
          <ul className="doctors-thumb tab-buttons clearfix">
            <li
              data-tab="#doctor-tab-1"
              className={`tab-btn ${activeTab === 'doctor-tab-1' ? 'active-btn' : ''}`}
              onClick={() => setActiveTab('doctor-tab-1')}
            >
              <div className="image-box">
                <figure><img src="images/resource/doctor-thumb-1.jpg" alt="Doctor Thumbnail" /></figure>
              </div>
            </li>
            <li
              data-tab="#doctor-tab-2"
              className={`tab-btn ${activeTab === 'doctor-tab-2' ? '' : ''}`}
              onClick={() => setActiveTab('doctor-tab-2')}
            >
              <div className="image-box">
                <figure><img src="images/resource/doctor-thumb-2.jpg" alt="Doctor Thumbnail" /></figure>
              </div>
            </li>
            <li
              data-tab="#doctor-tab-3"
              className={`tab-btn ${activeTab === 'doctor-tab-3' ? '' : ''}`}
              onClick={() => setActiveTab('doctor-tab-3')}
            >
              <div className="image-box">
                <figure><img src="images/resource/doctor-thumb-3.jpg" alt="Doctor Thumbnail" /></figure>
              </div>
            </li>
          </ul>

          <div className="tabs-content">
            <DoctorTab
              id="doctor-tab-1"
              activeTab={activeTab}
              imgSrc="images/resource/doctor-1.jpg"
              name="Dr. Johan Doe"
              designation="Neurosurgeon"
              timings="Monday - Friday ( 5:00pm - 8pm )"
            />
            <DoctorTab
              id="doctor-tab-2"
              activeTab={activeTab}
              imgSrc="images/resource/doctor-2.jpg"
              name="Dr. Jane Smith"
              designation="Cardiologist"
              timings="Monday - Friday ( 3:00pm - 6pm )"
            />
            <DoctorTab
              id="doctor-tab-3"
              activeTab={activeTab}
              imgSrc="images/resource/doctor-3.jpg"
              name="Dr. Emily Johnson"
              designation="Dermatologist"
              timings="Monday - Friday ( 1:00pm - 4pm )"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
