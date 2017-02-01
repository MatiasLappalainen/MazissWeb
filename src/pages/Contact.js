import React from 'react'
import '../Components/Body/Body.css'

class Contact extends React.Component{
  render() {
    return <div className="child-div">
      <div className="contact-wrapper">
      <ul className="Home_li">
        <h1>Contact</h1>
        <li>Email: Matias.lappalainen@hotmail.com</li>
        <li>Puh: +358400908986</li>
        <li>Github: <a href="https://github.com/Maziss" target="_blank">github.com/maziss</a></li>
      </ul>
    </div>
      </div>
  }
}

export default Contact
