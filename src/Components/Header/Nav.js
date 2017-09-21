import React from 'react'
import ListItem from './ListItem'

const Nav = ({styles}) => {



return (
    <div className="nav-div" style={styles}>
      <nav className="nav">
        <ul className="nav-ul">
          <ListItem styles={styles} to="/Home" text="Matias Lappalainen" />
          <li className="seperator"><span>/</span></li>
          <ListItem styles={styles} to="/Contact" text="Contact" />
          <li className="seperator"><span>/</span></li>
          <ListItem styles={styles} to="/About" text="About" />
          <li className="seperator"><span>/</span></li>
          <ListItem styles={styles} to="/Portfolio" text="Portfolio" />
        </ul>
      </nav>
    </div>
    )
  }


export default Nav
