import React from 'react'
import DayCoffeeTimer from '../Components/Body/DayCoffeeTimer'
import AnimationWrapper from '../Components/Body/AnimationWrapper'
import {Grid, Row, Col} from 'react-bootstrap'
import '../Components/Body/Body.css'
class Home extends React.Component{


  render() {
    return <div className="child-div">
              <div className="home-wrapper">
                <div className="landing">
                  <Grid>
                    <Row>
                      <Col xs={12} md={12}><h1>Welcome to my homepage & information center</h1></Col>
                        <Col xs={12} md={12}><p id="under-con">This site is still project under work and there will be updates frequently. If you want to view the source code you can watch it in here: <a href="https://github.com/Maziss/frontPage/tree/gh-pages" target="_blank">Gihub</a></p></Col>
                          <Col xs={12} md={6}><ul className="Home_li col-md-8 col-xs-12" id="home">
                            <h2>Work List</h2>
                            <li>Styling components</li>
                            <li>Small little details</li>
                            <li>Footer</li>
                            <li>Responsive Design</li>
                          </ul>
                          </Col>
                          <Col xs={12} md={6}><DayCoffeeTimer /></Col>
                      </Row>
                  </Grid>
                </div>
                  <AnimationWrapper>

                          <div className="home_info">
                            <h1 className="home_h1" id="home_h1">My Skill Set</h1>
                          </div>

                  </AnimationWrapper>
              </div>
            </div>
  }
}

export default Home
