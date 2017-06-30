import React from 'react'
import BodyComponent from './BodyComponent'
import {Route} from 'react-router'
import {Switch} from 'react-router-dom';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import NotFound from "../../pages/NotFound";


class Body extends React.Component{


  render () {
    return (
      <div className="wrapper" id="wrapper">
        <BodyComponent />
        <div className="content" id="content" >
          <div className="positioner helper">
          <div className="next helper"><i className="arrow-img" height="50px" width="50px"></i></div>
          </div>
          <div className="content-helper">
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/Portfolio" component={Portfolio}></Route>
            <Route component={NotFound}></Route>
            </Switch>
            </div>
        </div>
      </div>
    )
  }
}

export default Body
