import React from 'react';
import Sidebar from './Sidebar';
import DepartmentDetail from './departent_detail';
import PriceFeatures from './PriceFeature';

const DepartmentPage = () => {
  return (
    <div className="sidebar-page-container style-two">
      <div className="auto-container">
        <div className="row clearfix">
          <Sidebar />
          <div className="content-side col-lg-8 col-md-12 col-sm-12">
            <DepartmentDetail />
            <PriceFeatures />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
