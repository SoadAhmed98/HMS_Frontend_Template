import Header from "../Components/header.js";
import DoctorSec from "../Components/doctorSec.js";
import Time from "../Components/time.js";
import DoctorInfoSection from "../Components/doctor-info.js";

function OurTeam () {
    return (
      <>
      <Header head="Team MediTech" content="What We Actually Do?" place="Team"/>
      <DoctorInfoSection/>
      <Time/>
      <DoctorSec/>
      </>
    );
  };
  
  export default OurTeam;