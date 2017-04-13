import React from 'react'

class SocialIcon extends React.Component{
  render () {
    return (

      <li><a rel="noopener" style={this.props.styles} className={this.props.class} href={this.props.to} target="_blank"></a></li>

    )
  }
}

export default SocialIcon
