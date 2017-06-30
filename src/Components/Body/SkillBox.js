import React from 'react'
import {Col} from 'react-bootstrap'
import SkillBar from './SkillBar'

class SkillsBox extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        style: {
          transform: 'translateX(0px)',
          boxShadow: '2px 2px 2px #ffffff',
          
        }
      }
  }

  render () {


    return (
      <Col xs={Number(this.props.xsSize)} md={Number(this.props.mdSize)} className="SkillBox ct">
        <div className="Skill-wrapper">
          <span className={this.props.icon} aria-hidden="true" style={this.state}></span>
          <p id="Skill-text">{this.props.text}</p>
          <p>How I would rate my ability</p>
          <SkillBar min={this.props.min} max={this.props.max} level={this.props.level} />
        </div>
      </Col>
    )
  }
}

export default SkillsBox
