import HomeHeader from "../Components/homeComponents/home_header";
import HomeAbout from "../Components/homeComponents/home_about";
import HomeCounter from "../Components/homeComponents/home_counter";
import HomeDepartment from "../Components/homeComponents/home_departments";
import HomeServices from "../Components/homeComponents/home_services";
import TeamSection from "../Components/team.js";
import HomeNews from "../Components/homeComponents/home_news.js";
import { useEffect } from "react";
import WOW from 'wowjs';

function Home () {
  
  useEffect(() => {
		new WOW.WOW().init();
	}, []);
  
    return (
      <>
      
      <HomeHeader/>
      <HomeAbout/>
      <HomeCounter/>
      <HomeDepartment/>
      <HomeServices/>
      <TeamSection/>
      <HomeNews/>
      
      </>
    );
  };
  
  export default Home;