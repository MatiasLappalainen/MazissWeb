import React from 'react';
import {Col} from 'react-bootstrap';


class PortfolioItem extends React.Component {
    constructor(props){
        super(props);
    }





    render() {
        return (
            <div className="wrapper">
                
                    <Col xs={8} md={6}>    
                            <div className="item">
                                <h1>{this.props.name}</h1>
                                <p>{this.props.text}</p>
                            </div>
                       
                    </Col>
                
            </div>
        );
    }
}

export default PortfolioItem;

