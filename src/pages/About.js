import React from 'react'

import PhotoElement from "../Components/Body/PhotoElement"



import '../Components/Body/Body.css'

import src from "./KuvaCV.jpg"

export default React.createClass({
  render() {
    return (
    <div className="child-div">
      <div className="About-wrapper">
        <div className="landing">
        <div className="text">
          <h1>About</h1>
        </div>
        <div className="about-list">
          <p>I&#39;m student who currently studies in Helsingin Medialukio. I&#39;ve been programming for 2 years as a hobby. I have mainly done web base programming with technologies like Polymer, React, PHP, Javascript, HTML, CSS</p>
        </div>
      <PhotoElement className="img-responsive" src={src} height="400px" width="266px" mode="fill"/>
      </div>
    </div>
  </div>
    )
  }
})
