import React from 'react'
import {Col} from 'react-bootstrap'
import SkillBar from './SkillBar'

class SkillsBox extends React.Component{
  
  render () {
    return (
      <Col xs={Number(this.props.xsSize)} md={Number(this.props.mdSize)} className="SkillBox ct">
        <div className="Skill-wrapper">
          <span className={this.props.icon} aria-hidden="true" style={this.state}></span>
          <p id="Skill-text">{this.props.text}</p>
          <SkillBar min={this.props.min} max={this.props.max} lvl={this.props.lvl} />
        </div>
      </Col>
    )
  }
}

export default SkillsBox
