import React from 'react'
import {Col} from 'react-bootstrap'
class ExBox extends React.Component {
    
    render() {
        return (
            <Col xs={12} md={10}>
                <div className={'wrapper-ex ' + this.props.className}>
                    <i className={this.props.icon} aria-hidden="true"></i>
                    <h3>{this.props.header}</h3>
                    <p>{this.props.text}</p>
                </div>
            </Col>
        );
    }
}


export default ExBox;
