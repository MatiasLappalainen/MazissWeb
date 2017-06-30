import React from 'react'

import PhotoElement from "../Components/Body/PhotoElement"
import {Grid, Row, Col} from 'react-bootstrap'


import src from "./KuvaCV.jpg"

class About extends React.Component{
  render() {
    return (
    <Grid>
    <div className="child-div">
      <div className="About-wrapper">
        <div className="landing">
          <Row>
            
            <div className="text">
              <h1>About Me!</h1>
            </div>
            <Col md={6} xs={8}>
            <div className="about-list helper">
              <p>I&#39;m a student who's currently studying in Helsingin Medialukio. I&#39;ve been programming for two-years as a hobby. My skills include mostly web programming</p>
            </div>
            </Col>
          <PhotoElement className="img-responsive" src={src} height="400px" width="266px" mode="fill"/>
          <Col md={6} xs={8}>

            <h1>Words that describe me</h1>
            
          </Col>

        </Row>
      </div>
    </div>
  </div>
  </Grid>
    )
  }
}

export default About;
