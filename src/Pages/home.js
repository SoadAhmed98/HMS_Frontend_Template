import Home_Header from "../Components/homeComponents/home_header";
import HomeAbout from "../Components/homeComponents/home_about";
import HomeCounter from "../Components/homeComponents/home_counter";
import HomeDepartment from "../Components/homeComponents/home_departments";
import HomeServices from "../Components/homeComponents/homw_services";

function Home () {
    return (
      <>
      <Home_Header/>
      <HomeAbout/>
      <HomeCounter/>
      <HomeDepartment/>
      <HomeServices/>
      
      </>
    );
  };
  
  export default Home;