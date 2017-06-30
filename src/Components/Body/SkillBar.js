import React from 'react'



class SkillBar extends React.Component{

  constructor(props){
    super(props);

    this.state = {style: {width: this.props.level + '%', textAlign: 'center'}}
  }

  



  render () {

    let defaults = {
      min: this.props.min || 0,
      max: this.props.max || 100,
      lvl: this.props.lvl || 0
    }

    return (
      <div className="skillBar" min={defaults.min} max={defaults.max} level={defaults.lvl}>
          <div className="skillbar-bar" style={this.state.style}>

          </div>
      </div>
    )
  }
}

export default SkillBar
