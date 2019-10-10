import React from 'react';
import Counter from "./TPComponents/Counter/Counter";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./history";

function App() {
  return (
      <Router>
          <Switch>
              {/* Counter route*/}
              <Route exact path={"/counter"} component={Counter} />
              {/* Default case  */}
              <Route render={() => (
                  <Redirect to={"/counter"} />
              )} />
          </Switch>
      </Router>
  );
}

export default App;
