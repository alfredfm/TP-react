import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import AuthRoute from './components/Auth/AuthRoute';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Snackbar from './lib/Snackbar/Snackbar';
import {
  Main,
  UsersPage,
  ParametersPage
} from './pages';
import history from './history';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <>
        <Switch>

          {/* Main  */}
          <AuthRoute exact path={ "/" } component={Main}/>
          <ProtectedRoute role={1} exact path={ "/utilisateurs" } component={UsersPage}/>
          <ProtectedRoute role={1} exact path={ "/parametres" } component={ParametersPage}/>

          {/* Default Route */}
          <Route render={() =>(<Redirect to={ "/" } />)} />

        </Switch>
        <Snackbar />
      </>
    </Router>
  );
}

export default App;
