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
          <p>I&#39;m a student who's currently studying in Helsingin Medialukio. I&#39;ve been programming for two-years as a hobby. My skills include mostly web programming technologies like Polymer, React, PHP, Javascript, HTML, CSS, SCSS</p>
        </div>
      <PhotoElement className="img-responsive" src={src} height="400px" width="266px" mode="fill"/>
      </div>
    </div>
  </div>
    )
  }
})
