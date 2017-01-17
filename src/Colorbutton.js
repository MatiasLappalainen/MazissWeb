import React from 'react'
import './index.css'

let buttonEvent = function(color){

  document.getElementById('full').style.backgroundColor = color;

}

const Colorbutton = React.createClass({
  render () {
    return (
      <div className="button-div" onClick={(color) => buttonEvent(this.props.color)}><a className="button">{this.props.name}</a></div>
    )
  }
})

export default Colorbutton
