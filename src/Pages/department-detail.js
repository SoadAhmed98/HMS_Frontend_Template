import React from "react";
import Header from "../Components/header.js";
import DepartmentPage from "../Components/departmentCompontents/departmentDetailsAll.js";
import DoctorSec from "../Components/doctorSec.js";
// import DoctorsSection from "../Components/departmentCompontents/DoctorSection.js";
import  Navbar  from "../Components/navbar.js";
import { useEffect } from "react";
import WOW from 'wowjs';

function DepartmentDetails() {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  
  return (
    <>
    <Navbar/>
      <Header head="Departments Of MediTech" content="What We Actually Do?" place="Departments" />
      <DepartmentPage></DepartmentPage>
      <DoctorSec></DoctorSec>
    </>
  );
};

export default DepartmentDetails;