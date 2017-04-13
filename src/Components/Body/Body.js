import React from 'react'
import BodyComponent from './BodyComponent'

class Body extends React.Component{


  render () {
    return (
      <div className="wrapper" id="wrapper">
        <BodyComponent />
        <div className="content" id="content" >
          <div className="positioner helper">
          <div className="next helper"><i className="arrow-img" height="50px" width="50px"></i></div>
          </div>
          <div className="content-helper">{this.props.children}</div>

        </div>
      </div>
    )
  }
}

export default Body
