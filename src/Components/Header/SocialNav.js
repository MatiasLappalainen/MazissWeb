import React from 'react'
import SocialIcon from './SocialIcon'

class SocialNav extends React.Component{
  render () {
    return (
      <div className="social-helper">
        <nav className="social">
          <ul>
            <SocialIcon class="fa fa-facebook-official fa-2x socialIcon" to="https://www.facebook.com/matias.lappalainen98" styles={this.props.styles} />
            <SocialIcon class="fa fa-github fa-2x socialIcon" to="https://github.com/Maziss" styles={this.props.styles} />
            <SocialIcon class="fa fa-twitter fa-2x socialIcon" to="https://twitter.com/mazis11" styles={this.props.styles} />
            <SocialIcon class="fa fa-instagram fa-2x socialIcon" to="https://www.instagram.com/mazissss/" styles={this.props.styles} />
          </ul>
        </nav>
      </div>
    )
  }
}

export default SocialNav
