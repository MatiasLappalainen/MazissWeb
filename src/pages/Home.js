import React from 'react'
import DayCoffeeTimer from '../Components/Body/DayCoffeeTimer'
import '../Components/Body/Body.css'


class Home extends React.Component{


  render() {
    return <div className="child-div">
        <h1>Welcome to my homepage & information center</h1>
        <p id="under-con">This site is still project under work and there will be updates frequently. If you want to view the source code you can watch it in here: <a href="https://github.com/Maziss/frontPage/tree/gh-pages" target="_blank">Gihub</a></p>
        <ul className="Home_li" id="home">
          <h2>Work List</h2>
          <li>Bio</li>
          <li>Portfolio</li>
          <li>Styling components</li>
          <li>Remove active when scrollTop = 0</li>
          <li>And small little details</li>
          <li>Footer</li>
        </ul>

        <DayCoffeeTimer />
  </div>
  }
}

export default Home
