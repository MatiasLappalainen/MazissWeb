import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaWidth: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  }

  handleDimension = () => {
    this.setState({
      mediaWidth: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };

  componentDidMount() {
    window.addEventListener("resize", () => this.handleDimension());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.handleDimension());
  }

  render() {
    const { mediaWidth, height } = this.state;
    return (
      <div className="App">
        <Header {...this.state} />
        <Body />
      </div>
    );
  }
}

export default App;
