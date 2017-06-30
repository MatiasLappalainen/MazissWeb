import React from 'react';

class WordList extends Component {
    render() {
        return (
            <ul className="list-wrapper">
                {this.props.child}
            </ul>
        );
    }
}

export default WordList;