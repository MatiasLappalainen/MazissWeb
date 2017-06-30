import React from 'react';
import ExBox from './ExBox'
import {Grid, Row, Col} from 'react-bootstrap'

class Experties extends React.Component {
    
    render() {
        return (
            <div className="wrapper">
                <h1>Me as a programmer</h1>
                <Grid>
                    <Row>
                        <Col xs={8} md={12}>
                            <div className="inline">
                                <ExBox header="Focus" text="My main focus for a while now has been web development for a while now, since I think I can give that area the most." icon="fa fa-diamond fa-5x" />
                                <ExBox header="Who am I?" text="I'm a student from Finland, Who has been self studying programming for about two years now." icon="fa fa-question fa-5x" />
                                <ExBox header="Skills" text="I've been learning web technologies and doing projects with them for a year now. Technologies I use right now include React, HTML, SCSS, Javascript, PHP" icon="fa fa-briefcase fa-5x" />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Experties;
