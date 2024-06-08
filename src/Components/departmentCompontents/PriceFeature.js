import React from 'react';

const PriceFeatures = () => {
  return (
    <section className="price-features">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="price-feature col-lg-6 col-md-6 col-sm-12">
            <h3>Investigation</h3>
            <ul>
              <li><span className="text">Gastroscopy </span> <span className="price">$320</span></li>
              <li><span className="text">Colonoscopy </span> <span className="price">$145</span></li>
              <li><span className="text">Bronchoscopy </span> <span className="price">$270</span></li>
              <li><span className="text">Parathyroid Scan </span> <span className="price">$80</span></li>
              <li><span className="text">Allergy Testing </span> <span className="price">$385</span></li>
            </ul>
          </div>
          <div className="price-feature col-lg-6 col-md-6 col-sm-12">
            <h3>Treatments</h3>
            <ul>
              <li><span className="text">Parathyroid Scan</span> <span className="price">$80</span></li>
              <li><span className="text">Allergy Testing</span> <span className="price">$385</span></li>
              <li><span className="text">Colonoscopy</span> <span className="price">$145</span></li>
              <li><span className="text">Gastroscopy</span> <span className="price">$320</span></li>
              <li><span className="text">Bronchoscopy</span> <span className="price">$270</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceFeatures;
