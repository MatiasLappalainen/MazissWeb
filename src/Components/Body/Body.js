import React from 'react'
import '../../index.css'
import './Body.css'
import Footer from '../Footer/Footer'


class Body extends React.Component{
  render () {
    return (
      <div className="wrapper">
        <div className="BodyComponent">
        </div>
        <div className="content" id="content">
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Body
