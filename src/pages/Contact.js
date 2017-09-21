import React from "react";
import { Helmet } from "react-helmet";
import ChildDiv from "../Components/Body/ChildDiv";
import Landing from "../Components/Body/Landing";
import { Grid } from "react-bootstrap";

const Contact = () => {
  return (
    <ChildDiv>
      <Landing>
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <Grid>
          <div className="contact-wrapper">
            <div className="landing">
              <h1>Contact Me</h1>
              <p id="contact-p">
                If you are interested in working with me or you have any
                questions for me, feel free to contact to me
              </p>
              <ul className="Home_li">
                <li>
                  <i className="fa fa-envelope" aria-hidden="true" /> Email:{" "}
                  <a href="mailto:matias.lappalainen@hotmail.com?subject=Web@developer">
                    Matias.lappalainen@hotmail.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-github" aria-hidden="true" /> Github:{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/Maziss"
                    target="_blank"
                  >
                    github.com/maziss
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Landing>
    </ChildDiv>
  );
};

export default Contact;
