import React from 'react'

import PhotoElement from "../Components/Body/PhotoElement"



import '../Components/Body/Body.css'

import src from "./KuvaCV.jpg"

export default React.createClass({
  render() {
    return <div className="child-div"><h1>About</h1>
    <div className="About-wrapper">
    <p>I'm a student from finland, who has been keen on programming for couple years.</p>
    <PhotoElement className="img-responsive" src={src} height="600px" width="266px" mode="fill"/>
    </div>
  </div>
  }
})
