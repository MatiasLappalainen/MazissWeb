import React from 'react'

class Contact extends React.Component{
  render() {
    return <div className="child-div">
      <div className="contact-wrapper">
        <div className="landing">
          <h1>Contact Me</h1>
          <p id="contact-p">If you are interested in working with me or you have any questions for me, feel free to contact to me</p>
          <ul className="Home_li">
            <li><i className="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:matias.lappalainen@hotmail.com?subject=Web@developer">Matias.lappalainen@hotmail.com</a></li>
            <li><i className="fa fa-github" aria-hidden="true"></i> Github: <a rel="noopener" href="https://github.com/Maziss" target="_blank">github.com/maziss</a></li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default Contact
