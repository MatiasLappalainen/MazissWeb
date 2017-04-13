import React from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'



class SkillBar extends React.Component{

  constructor(props){
    super(props);

    this.state = {style: {width: this.props.lvl + '%'}}
  }



  render () {
    return (
      <div className="skillBar" min={this.state.min} max={this.state.max} lvl={this.state.lvl}>
        <ReactTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        ></ReactTransitionGroup><div className="skillbar-bar" style={this.state.style}></div></div>
    )
  }
}

export default SkillBar
