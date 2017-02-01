import React from 'react'
import '../../index.css'
import './Body.css'
import LandingText from './LandingText'


class Body extends React.Component{


  render () {
    return (
      <div className="wrapper">
        <div className="BodyComponent">
          <LandingText text="Matias Lappalainen" textTwo="Coffee drinker and A small beast"/>
        </div>
        <div className="content" id="content" >
          <div className="content-helper">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Body
