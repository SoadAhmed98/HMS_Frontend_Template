import React from 'react';

const DepartmentDetail = () => {
  return (
    <div className="department-detail">
      <div className="image-box">
        <figure><img src="images/article1.jpg" alt="Department" style={{width:"50rem", height:"25rem"}}/></figure>
      </div> 
      <div className="lower-content">
        <h2>Departments Of Neurology</h2>
        <h5 className="theme_color">ResoFus Alomar Treatment for Essential Tremor and Parkinson's Disease</h5>
        <p>Resofus combines MR imaging and focused ultrasound into MR guided Focused Ultrasound technology, and provides a transcranial, non-invasive image-guided personalized treatment modality with no incisions and with no ionizing radiation.</p>
        <p>This combination of continuous MR imaging and very highly focused acoustic sound waves provides the ability to provide pinpoint precision treatment at the planned target, without causing damage to any of the normal surrounding tissue. This precise local lesioning stops the improper transfer of electrical signals that induce the tremor, and it stops.</p>
        <div className="two-column">
          <div className="row clearfix">
            <div className="info-column col-md-6 col-sm-6 col-xs-12">
              <p>In the case of Parkinson's disease, it is not a cure, it just improves quality of life by reducing and even stopping tremors. Resofus may be used for treatment of movement disorders such as Neuropathic pain, Parkinson’s disease, and Essential Tremor. This precise local lesioning stops the improper transfer of electrical signals that induce the tremor, and it stops.</p>
            </div>
            <div className="image-column col-md-6 col-sm-6 col-xs-12">
              <div className="image"><a href="images/resource/doctor-4.jpg" className="lightbox-image"><img src="images/article2.jpg" alt="Doctor" style={{width:"20rem"}}/></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
