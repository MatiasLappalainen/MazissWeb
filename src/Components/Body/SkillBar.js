import React from "react";

class SkillBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: { width: this.props.level + "%", textAlign: "center" }
    };
  }

  render() {
    return (
      <div className="skillBar">
        <div className="skillbar-bar" style={this.state.style} />
      </div>
    );
  }
}

export default SkillBar;
