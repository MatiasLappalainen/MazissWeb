import React from 'react'
import '../../index.css'
import './Body.css'
import BodyComponent from './BodyComponent'

class Body extends React.Component{


  render () {
    return (
      <div className="wrapper">
        <BodyComponent />
        <div className="content" id="content" >
          <div className="positioner">
          <div className="next"><i className="arrow-img" height="50px" width="50px"></i></div>
          </div>
          <div className="content-helper">{this.props.children}</div>

        </div>
      </div>
    )
  }
}

export default Body
