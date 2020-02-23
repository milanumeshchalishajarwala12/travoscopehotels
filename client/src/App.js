import React,{Fragment} from 'react';
import './App.css';
import Landing from './Components/Layout/Landing';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import SideNavbar from './Components/Layout/SideNavBar'
import TopNavBar from './Components/Layout/TopNavBar'
import AboutUs from './Components/Layout/AboutUs';
import ContactUs from './Components/Layout/ContactUs';
import Destinations from './Components/Layout/Destinations';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import BottomBar from './Components/Layout/BottomBar';


function App() {
  return (
    
    <Fragment>
      <Router>
<section className="navbar">
  <TopNavBar/>
  </section>
       
      <Route exact path="/" component={Landing}/>
      
      
              <switch>
      
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/contactus" component={ContactUs} />
                <Route exact path="/destinations" component={Destinations} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
             </switch>
      
      </Router>
      <BottomBar/>
      </Fragment>
  );
}

export default App;
