import React, {Component} from "react";
import { Helmet } from "react-helmet";
import ChildDiv from "./../Components/Body/ChildDiv";
import { Grid } from "react-bootstrap";
import PortfolioItem from "./../Components/Body/portfolioItem";
import * as items from './../util/texts'

export default class Portfolio extends Component {
  render(){
  return (
    <Grid>
      <ChildDiv>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <div className="portfolio-wrapper">
          <div className="landing">
            <PortfolioItem
              name="Algorithm"
              text={items-PortfolioText1}
              to="www.github.com"
            />
            <PortfolioItem
              name="Data-Reader"
              text={items-PortfolioText2}
              to="www.github.com"
            />
            <PortfolioItem
              name="Website Register"
              text={items-PortfolioText3}
              to="www.github.com"
            />
          </div>
        </div>
      </ChildDiv>
    </Grid>
  );}
};