import React from 'react'
import DayCoffeeTimer from '../Components/Body/DayCoffeeTimer'
import AnimationWrapper from '../Components/Body/AnimationWrapper'
import {Grid, Row, Col} from 'react-bootstrap'
import SkillBox from '../Components/Body/SkillBox'
import HorizontalScrollWrapper from '../Components/Body/HorizontalScrollWrapper.js'
import '../../node_modules/bootstrap-horizon/src/bootstrap-horizon.css'

class Home extends React.Component{


  render() {
    return <div className="child-div">
              <div className="home-wrapper">
                <div className="landing">
                  <Grid>
                    <Row>
                      <Col xs={12} md={12}><h1>Welcome to my homepage & information center</h1></Col>
                        <Col xs={12} md={12}><p id="under-con">This site is still project under work and there will be updates frequently. If you want to view the source code you can watch it in here: <a rel="noopener" href="https://github.com/Maziss/frontPage/tree/gh-pages" target="_blank">Gihub</a></p></Col>
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

                        <div className="home_info helper" id="home_info">
                          <HorizontalScrollWrapper>
                            <Grid className="aligner">
                              <h1 className="home_h1" id="home_h1">My Skill Set</h1>
                                <Row className="row-horizon">
                                  <SkillBox className="SkillBox" icon="devicons devicons-javascript fa-4x" xsSize="10" mdSize="5" text="bla" lvl="30" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-css3_full fa-4x" xsSize="10" mdSize="5" text="bla" lvl="30" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-html5 fa-4x" xsSize="10" mdSize="5" text="bla" lvl="80" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-react fa-4x " xsSize="10" mdSize="5" text="bla" lvl="80" />
                                  <SkillBox className="SkillBox" icon="devicons devicons devicons-sass fa-4x" xsSize="10" mdSize="5" text="bla" lvl="80" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-jquery fa-4x " xsSize="10" mdSize="5" text="bla" lvl="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-php fa-4x" xsSize="10" mdSize="5" text="bla" lvl="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-mysql fa-4x" xsSize="10" mdSize="5" text="bla" lvl="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-bootstrap fa-4x" xsSize="10" mdSize="5" text="bla" lvl="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-java fa-4x" xsSize="10" mdSize="5" text="bla" lvl="50" />
                                </Row>
                            </Grid>
                          </HorizontalScrollWrapper>
                        </div>

                  </AnimationWrapper>
              </div>
            </div>
  }
}

export default Home
