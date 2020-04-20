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
import Summary from './Components/Layout/Summary';
import Order from './Components/Layout/Order';
import OrderSummary from './Components/Layout/OrderSummary';
import PrivateRoute from './Components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUserDetails } from './actions/user';
import AddGuestInfo from './Components/Layout/AddGuestInfo';
import Confirmation from './Components/Layout/Confirmation';
import Mybookings from './Components/Layout/Mybookings';
import CheckIn from './Components/Layout/CheckIn';
import { getBookings } from './actions/booking';
import Amenities from './Components/Layout/Amenities';
import BookSlot from './Components/Layout/BookSlot';
import Dining from './Components/Layout/Dining';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadUserDetails());
    store.dispatch(getBookings());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="navbar">
            <TopNavBar />
          </div>

          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/listofrooms" component={ListOfRooms} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/addguestinfo" component={AddGuestInfo} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/confirmationpage" component={Confirmation} />
            <PrivateRoute exact path="/profile" component={Mybookings} />
            <PrivateRoute exact path="/checkin" component={CheckIn} />
            <Route exact path="/amenities" component={Amenities} />
            <Route exact path="/bookslot" component={BookSlot} />
            <PrivateRoute exact path="/dining" component={Dining} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/ordersummary" component={OrderSummary} />

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
