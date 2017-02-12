import React from 'react'
import DayCoffeeTimer from '../Components/Body/DayCoffeeTimer'
import AnimationWrapper from '../Components/Body/AnimationWrapper'
import '../Components/Body/Body.css'
class Home extends React.Component{


  render() {
    return <div className="child-div">
              <div className="home-wrapper">
                <div className="landing">
                  <h1>Welcome to my homepage & information center</h1>
                    <p id="under-con">This site is still project under work and there will be updates frequently. If you want to view the source code you can watch it in here: <a href="https://github.com/Maziss/frontPage/tree/gh-pages" target="_blank">Gihub</a></p>
                      <ul className="Home_li" id="home">
                        <h2>Work List</h2>
                        <li>Styling components</li>
                        <li>Small little details</li>
                        <li>Footer</li>
                        <li>Responsive Design</li>
                      </ul>
                      <DayCoffeeTimer />
                  </div>
                  <AnimationWrapper>
                    <div className="home_info">
                      <h1 className="home_h1" id="home_h1">Passion for Programming since Forever</h1>
                    </div>
                  </AnimationWrapper>
              </div>
            </div>
  }
}

export default Home
