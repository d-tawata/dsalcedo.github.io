import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Project from "./Project";
import NoMatch from "./NoMatch";
import LinkedIn from "./LinkedIn";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <LinkedIn />
          <Navigation />

          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/" component={Projects}></Route>
            <Route exact path="/portfolio/:projectID" component={Project} />
            {/* <Route path="*">
              <NoMatch />
            </Route> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    );
  }
}
