import React from 'react'
import '../Components/Body/Body.css'

class Home extends React.Component{
  render() {
    return <div className="child-div">
        <h1>Home</h1>
        <h2>Welcome to my site</h2>
        <p>Sorry but this site is still under construction, but there will be updates coming almost everyday. If you want to view the source code you can watch it in here: <a href="https://github.com/Maziss" target="_blank">Gihub</a></p>
        <ul className="Home_li">
          <h1>What is under development</h1>
          <li>active classes on header</li>
          <li>More content</li>
          <li>Social media links</li>
          <li>Bio</li>
          <li>Works page</li>
        </ul>

  </div>
  }
}

export default Home
