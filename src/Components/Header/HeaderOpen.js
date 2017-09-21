import React from "react";

class HeaderOpen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {
        left: "10px"
      }
    };
  }

  render() {
    return (
      <button
        className="Open"
        id="open"
        onClick={this.handleClick.bind(this)}
        style={this.state.styles}
      >
        <i className="fa fa-bars fa-4x" aria-hidden="true" />
      </button>
    );
  }
}

export default HeaderOpen;
