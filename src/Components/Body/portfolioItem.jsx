import React from 'react';
import {Col} from 'react-bootstrap';


class PortfolioItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            to : this.props.to,
        }
    }

    componentDidMount(props){
        window.addEventListener('hover', (e) => this.handleHover);
    }

    handleHover(props){

    }




    render() {
        return (
            <div className="wrapper">
                
                    <Col xs={8} md={6}>    
                            <div className="item">
                                <h1>{this.props.name}</h1>
                                <p>{this.props.text}</p>
                                <a href={this.state.to}>Link to project source</a>
                            </div>
                       
                    </Col>
                
            </div>
        );
    }
}

export default PortfolioItem;

