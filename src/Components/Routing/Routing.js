import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import AsyncComponent from "./AsyncComponent";
const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
const Contact = lazy(() => import("../Contact/Contact"));
const Routing = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={AsyncComponent(Home)} />
        <Route path="/Home" component={AsyncComponent(Home)} />
        <Route path="/About" component={AsyncComponent(About)} />
        <Route path="/Contact" component={AsyncComponent(Contact)} />
        <Route component={AsyncComponent(Home)} />
      </Switch>
    </div>
  );
};
export default Routing;
