import React from 'react'
import './Body.css'

class LandingText extends React.Component{
  render () {
    return (
      <div className="landing-wrapper">
        <h1 className="landingText">{this.props.text}</h1>
        <tr />
        <h2 className="landingText">{this.props.textTwo}</h2>
        </div>
    )
  }
}

export default LandingText
