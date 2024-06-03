import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Pages/home.js';
import About from "./Pages/about";
import Doctors from "./Pages/doctors";
import Services from "./Pages/services";
import Faq from "./Pages/faq";
import Contact from "./Pages/contact";
import OurTeam from "./Pages/ourTeam";

import DoctorDetail from "./Pages/doctorDetail";
import NotFound from './Pages/notFound.js';
import Footer from"./Components/footer.js"
import ButtomUp from"./Components/buttomUp.js"
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="wow animate__animated animate__fadeIn">
      <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        {/* <Navbar /> */}
        <main className="flex-grow-1">
        <Switch>
          {/* <Route component={Home} path="/" exact /> */}
          <Route component={Home} path="/" exact/>
          <Route component={About} path="/about" exact />
          <Route component={Doctors} path="/doctors" exact />
          <Route component={OurTeam} path="/ourTeam" exact />
          <Route component={Services} path="/sevices" exact />
          <Route component={Faq} path="/faq" exact />
          <Route component={Contact} path="/contact" exact />
          <Route component={DoctorDetail} path="/doctors-detail" exact /> 

          <Route component={NotFound} path="*" exact />
          
          {/* <Route component={NotFound} path="*" /> */}
        </Switch>
         </main>  
        <Footer /> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
