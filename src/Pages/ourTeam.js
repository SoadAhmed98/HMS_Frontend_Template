import Header from "../Components/header.js";
import DoctorSec from "../Components/doctorSec.js";
import Time from "../Components/time.js";
import TeamSection from "../Components/team.js";

function OurTeam () {
    return (
      <>
      <Header head="Team MediTech" content="What We Actually Do?" place="Team"/>
      <TeamSection/>
      <Time/>
      <DoctorSec/>
      </>
    );
  };
  
  export default OurTeam;