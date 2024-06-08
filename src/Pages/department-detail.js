import React from "react";
import Header from "../Components/header.js";
import DepartmentPage from "../Components/departmentCompontents/departmentDetailsAll.js";

import DoctorsSection from "../Components/departmentCompontents/DoctorSection.js";
function DepartmentDetails() {
  return (
    <>
      <Header head="Departments Of MediTech" content="What We Actually Do?" place="Departments" />
      <DepartmentPage></DepartmentPage>
      <DoctorsSection></DoctorsSection>
    </>
  );
};

export default DepartmentDetails;