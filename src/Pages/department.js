import Header from "../Components/header";
import DepartmentSection from "../Components/departmentCompontents/departmentSection.js";
import HomeDepartment from "../Components/homeComponents/home_departments";

import DepartmentSec from "../Components/departmentCompontents/healthDepartment.js"
import WOW from 'wowjs';
import  Navbar  from "../Components/navbar.js";
import { useEffect } from "react";

function Department () {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <>
    <Navbar/>
    <Header head="Departments of MediTech" content="What We Actually Do?" place="Departments"/>
    <DepartmentSection></DepartmentSection>
    <HomeDepartment></HomeDepartment>
    {/* <DepartmentSec></DepartmentSec> */}

    </>
  );
  };
  
  export default Department;