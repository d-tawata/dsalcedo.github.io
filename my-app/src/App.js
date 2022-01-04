import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import NoMatch from "./NoMatch";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />

          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="*">{/* <NoMatch /> */}</Route>
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    );
  }
}
