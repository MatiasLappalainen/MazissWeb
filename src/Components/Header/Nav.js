import React from 'react'
import './Header.css'
import {Link} from 'react-router'

class Nav extends React.Component{


  ToContent(props){
    var el = document.getElementById('content');

    if(el.scrollIntoView ){
      el.scrollIntoView();
    }

  }


  render () {
    return (
    <div className="nav-div">
      <nav className="nav">
        <ul className="nav-ul">
          <li><Link to="Home" onClick={this.ToContent.bind(this)}><span>Matias Lappalainen</span></Link></li>
          <li className="seperator"><span>/</span></li>
          <li><Link to="Contact"><span>Contact</span></Link></li>
          <li className="seperator"><span>/</span></li>
          <li><a href="https://drive.google.com/file/d/0B8L01heyYG3cMDVYdHhTSVdRYmc/view?usp=sharing" target="_blank"><span>Resume</span></a></li>
          <li className="seperator"><span>/</span></li>
          <li><Link to="About"><span>About</span></Link></li>
        </ul>
      </nav>
    </div>
    )
  }
}

export default Nav
