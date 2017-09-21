import React from "react";
import { Col } from "react-bootstrap";

class PortfolioItem extends React.Component {
  
  componentDidMount() {
    window.addEventListener("hover", e => this.handleHover);
  }

  handleHover() {}

  render() {
    const {to, name, text} = this.props;
    return (
      <div className="wrapper">
        <Col xs={8} md={6}>
          <div className="item">
            <h1>{name}</h1>
            <p>{text}</p>
            <a href={to}>Link to project source</a>
          </div>
        </Col>
      </div>
    );
  }
}

export default PortfolioItem;
