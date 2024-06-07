import Header from "../Components/header.js";
import PioneeringHealth from "../Components/pioneeringHealth.js";
import HomeServices from "../Components/homeComponents/home_services.js";
function Services () {
    return (
      <>
       <Header head="Services MediTech" content="What We Actually Do?" place="Services"/>
       <HomeServices/>
       <PioneeringHealth/>

      </>
    );
  };
  
  export default Services;