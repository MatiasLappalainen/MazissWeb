import React from 'react'

class ExBox extends React.Component {
    
    render() {
        return (
            <div className="wrapper-ex">
                <i className={this.props.icon} aria-hidden="true"></i>
                <h3>{this.props.header}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}


export default ExBox;