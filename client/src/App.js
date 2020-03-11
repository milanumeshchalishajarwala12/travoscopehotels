import React, { Fragment } from 'react';
import './App.css';
import Landing from './Components/Layout/Landing';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import TopNavBar from './Components/Layout/TopNavBar';
import AboutUs from './Components/Layout/AboutUs';
import ContactUs from './Components/Layout/ContactUs';
import Destinations from './Components/Layout/Destinations';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import ListOfRooms from './Components/Layout/ListOfRooms';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className="navbar">
            <TopNavBar />
          </section>

          <Route exact path="/" component={Landing} />
          <Route exact path="/listofrooms" component={ListOfRooms} />

          <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
