import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AboutUs from './component/About/about'
import Services from './component/Services/Services'
import Contact from './component/contact/contact'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='#about' component={AboutUs} />
      <Route path='#services' component={Services} />
      <Route path='#contact' component={Contact} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
