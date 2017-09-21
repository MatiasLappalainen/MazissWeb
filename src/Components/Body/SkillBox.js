import React from "react";
import { Col, Row } from "react-bootstrap";
import SkillBar from "./SkillBar";

class SkillsBox extends React.Component {
  
  mapChildren = () => {
    const {xsSize, mdSize, children} = this.props;
    return React.Children.map(children, child => {
      return <Col md={mdSize} xs={xsSize}>{child}</Col>
    })
  }

  render() {
    return (
      <Row>
        {this.mapChildren()}
      </Row>
    );
  }
}

export default SkillsBox;

SkillsBox.defaultProps = {
  xsSize: 8,
  mdSize: 2
}