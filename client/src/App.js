import React, { Fragment, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import adminLoginPage from './Components/Auth/adminLoginPage';
import { Provider } from 'react-redux';
import store from './store';
import FuncSelection from './Components/Layout/FuncSelection';
import Navbar from './Components/Layout/Navbar';
import PrivateRoute from './Components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import { loadAdmin } from './actions/auth';
import ListOfRooms from './Components/Layout/ListOfRooms';
import ListOfUsers from './Components/Layout/ListOfUsers';
import ListOfStaff from './Components/Layout/ListOfStaff';
import AddEmployee from './Components/Layout/AddEmployee';
import SearchStaff from './Components/Layout/SearchStaff';
import SearchUser from './Components/Layout/SearchUser';
import SearchUserByStatus from './Components/Layout/SearchUserByStatus';
import SearchRooms from './Components/Layout/SearchRooms';
import AddRooms from './Components/Layout/AddRooms';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={adminLoginPage} />

            <Route exact path="/funcselection" component={FuncSelection} />
            <Route exact path="/listofrooms" component={ListOfRooms} />
            <Route exact path="/listofusers" component={ListOfUsers} />
            <Route exact path="/listofstaff" component={ListOfStaff} />
            <Route exact path="/addemployee" component={AddEmployee} />
            <Route exact path="/addrooms" component={AddRooms} />

            <Route exact path="/searchstaff" component={SearchStaff} />
            <Route exact path="/searchusers" component={SearchUser} />
            <Route
              exact
              path="/searchusersbystatus"
              component={SearchUserByStatus}
            />
            <Route exact path="/searchrooms" component={SearchRooms} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
