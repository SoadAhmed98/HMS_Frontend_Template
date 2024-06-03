import Header from "../Components/header.js";
import Question from "../Components/question.js";
import AskYourQuestion from "../Components/askYourQuestion.js";
function Faq () {
    return (
      <>
       <Header head="Faq’s For MediTech" content="What We Actually Do?" place="Faq’s"/>
       <Question/>
       <AskYourQuestion/>
      </>
    );
  };
  
  export default Faq;