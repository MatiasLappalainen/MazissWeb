import React from "react";
import PhotoElement from "../Components/Body/PhotoElement";
import { Grid, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ChildDiv from "../Components/Body/ChildDiv";
import Landing from '../Components/Body/Landing';

import src from "./KuvaCV.jpg";

const About = () => {
  return (
      <ChildDiv>
        <Landing>
        <Helmet>
          <title>About</title>
        </Helmet>
        <Grid>
        <div className="About-wrapper">
          <div className="landing">
            <Row>
              <div className="text">
                <h1>About Me!</h1>
              </div>
              <Col md={6} xs={8}>
                <div className="about-list helper">
                  <p>
                    I&#39;ve been programming for two-years as my hobby. Right now I program using React, HTML, CSS (postcss), node and GraphQL
                  </p>
                </div>
              </Col>
              <PhotoElement
                className="img-responsive"
                src={src}
                height="400px"
                width="266px"
                mode="fill"
              />
            </Row>
          </div>
        </div>
        </Grid>
        </Landing>
      </ChildDiv>
  );
};
export default About;
