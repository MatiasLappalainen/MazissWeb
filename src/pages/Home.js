import React from 'react'
import {Grid, Row} from 'react-bootstrap'
import SkillBox from '../Components/Body/SkillBox'
import HorizontalScrollWrapper from '../Components/Body/HorizontalScrollWrapper.js'
import Experties from '../Components/Body/Experties';

class Home extends React.Component{


  render() {
    return <div className="child-div">
              <div className="home-wrapper">
                <div className="landing">
                  
                  <Experties />

                </div>
                  
                        <div className="home_info helper" id="home_info">
                          <HorizontalScrollWrapper>
                            <Grid className="aligner">
                              <h1 className="home_h1" id="home_h1">My Skill Set</h1>
                                <Row className="row-horizon">
                                  <SkillBox className="SkillBox" icon="devicons devicons-javascript fa-4x" xsSize="10" mdSize="5" text="Javascript" level="30" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-css3_full fa-4x" xsSize="10" mdSize="5" text="CSS3" level="30" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-html5 fa-4x" xsSize={10} mdSize={5} text="HTML5" level="80" />
                                  <SkillBox className="SkillBox" icon="devicon-react-original fa-4x " xsSize="10" mdSize="5" text="React" level="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons devicons-sass fa-4x" xsSize="10" mdSize="5" text="SASS" level="80" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-jquery fa-4x " xsSize="10" mdSize="5" text="JQuery" level="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-php fa-4x" xsSize="10" mdSize="5" text="PHP" level="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-mysql fa-4x" xsSize="10" mdSize="5" text="MySQL" level="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-bootstrap fa-4x" xsSize="10" mdSize="5" text="Bootstrap" level="50" />
                                  <SkillBox className="SkillBox" icon="devicons devicons-java fa-4x" xsSize="10" mdSize="5" text="Java" level="50" />
                                </Row>
                            </Grid>
                          </HorizontalScrollWrapper>
                        </div>

                
              </div>
            </div>
  }
}

export default Home
