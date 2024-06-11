import React from 'react';
import Sidebar from './Sidebar';
import DepartmentDetail from './departent_detail';
import PriceFeatures from './PriceFeature';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const DepartmentPage = (props) => {
  

  return (
    <div className="sidebar-page-container style-two">
      <div className="auto-container">
        <div className="row clearfix">
          <Sidebar id={props.id}/>
          <div className="content-side col-lg-8 col-md-12 col-sm-12">
            <DepartmentDetail id={props.id}/>
            <PriceFeatures />

          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
