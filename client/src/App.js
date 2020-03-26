import React, { Fragment, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import adminLoginPage from './Components/Auth/adminLoginPage';
import { Provider } from 'react-redux';
import store from './store';
import funcSelection from './Components/Layout/funcSelection';
import Navbar from './Components/Layout/Navbar';
import PrivateRoute from './Components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import { loadAdmin } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={adminLoginPage} />
            <PrivateRoute
              exact
              path="/funcselection"
              component={funcSelection}
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
