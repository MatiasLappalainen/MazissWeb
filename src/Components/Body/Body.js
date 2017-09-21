import React from "react";
import BodyComponent from "./BodyComponent";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import NotFound from "../../pages/NotFound";

const Body = () => {
  return (
    <div className="wrapper" id="wrapper">
      <BodyComponent />
      <div className="content" id="content">
        <div className="positioner helper">
          <div className="next helper">
            <i className="arrow-img" height="50px" width="50px" />
          </div>
        </div>
        <div className="content-helper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Body;
