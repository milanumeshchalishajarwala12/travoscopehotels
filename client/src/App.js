import React, { Fragment, useEffect } from 'react';
import './App.css';
import Landing from './Components/Layout/Landing/Landing';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import TopNavBar from './Components/Layout/TopNavBar';
import AboutUs from './Components/Layout/AboutUs';
import ContactUs from './Components/Layout/ContactUs';
import Destinations from './Components/Layout/Destinations';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import ListOfRooms from './Components/Layout/ListOfRooms';
import Makeareservation from './Components/Layout/Makeareservation';
import ListofCusines from './Components/Layout/ListOfCuisines';
import Summary from './Components/Layout/Summary';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUserDetails } from './actions/user';
import AddGuestInfo from './Components/Layout/AddGuestInfo';
import Confirmation from './Components/Layout/Confirmation';
import Mybookings from './Components/Layout/Mybookings';
import CheckIn from './Components/Layout/CheckIn';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadUserDetails());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="navbar">
            <TopNavBar />
          </div>

          <Route exact path="/" component={Landing} />
          <Route exact path="/listofrooms" component={ListOfRooms} />
          <Switch>
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/listofcusines" component={ListofCusines} />
            <Route exact path="/addguestinfo" component={AddGuestInfo} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/confirmationpage" component={Confirmation} />
            <Route exact path="/mybookings" component={Mybookings} />
            <Route exact path="/checkin" component={CheckIn} />

            <Route
              exact
              path="/makeareservation"
              component={Makeareservation}
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
