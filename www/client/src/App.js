import React from 'react';
import Counter from "./TPComponents/Counter/Counter";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";
import Demo from './TPLib/Drawer/Demo';
import Todos from "./TPComponents/Todos/Todos";

function App() {
  return (
      <Router history={history}>
          <Switch>
              {/* Counter route*/}
              <Route exact path={"/counter"} render={() => (<Counter initValue={45} />)} />
              {/* Demo drawer route*/}
              <Route exact path={"/drawer/demo"} component={Demo} />
              {/* Todos route */}
              <Route exact path={"/todos"} component={Todos} />
              {/* Default case  */}
              <Route render={() => (
                  <Redirect to={"/counter"} />
              )} />
          </Switch>
      </Router>
  );
}

export default (App);
