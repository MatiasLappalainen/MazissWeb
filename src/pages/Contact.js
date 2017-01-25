import React from 'react'
import '../Components/Body/Body.css'

class Contact extends React.Component{
  render() {
    return <div className="child-div">
      <h1>Contact</h1>
      <ul className="Home_li">
        <li>Email: Matias.lappalainen@hotmail.com</li>
        <li>Puh: +358400908986</li>
        <li>Github: <a href="https://github.com/Maziss" target="_blank">github.com/maziss</a></li>
      </ul>
      </div>
  }
}

export default Contact
