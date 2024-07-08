import Header from "../Components/header.js";
import Question from "../Components/question.js";
import AskYourQuestion from "../Components/askYourQuestion.js";
import WOW from 'wowjs';
import { useEffect } from "react";
import  Navbar  from "../Components/navbar.js";


function Faq () {

  useEffect(() => {
		new WOW.WOW().init();
	}, []);

    return (
      <>
      <Navbar/>
       <Header head="Faq’s For MediTech" content="What We Actually Do?" place="Faq’s"/>
       <Question/>
       {/* <AskYourQuestion/> */}
      </>
    );
  };
  
  export default Faq;
