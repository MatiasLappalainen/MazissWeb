import React from 'react'
import ListItem from './ListItem'

class Nav extends React.Component{



  render () {
    return (
    <div className="nav-div" style={this.props.styles}>
      <nav className="nav">
        <ul className="nav-ul">
          <ListItem styles={this.props.styles} to="Home" text="Matias Lappalainen" />
          <li className="seperator"><span>/</span></li>
          <ListItem styles={this.props.styles} to="Contact" text="Contact" />
          <li className="seperator"><span>/</span></li>
          <ListItem styles={this.props.styles} to="About" text="About" />
          <li className="seperator"><span>/</span></li>
          <ListItem styles={this.props.styles} to="Portfolio" text="Portfolio" />
        </ul>
      </nav>
    </div>
    )
  }
}

export default Nav
