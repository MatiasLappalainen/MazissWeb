import React from "react";
import Nav from "./Nav";
import SocialNav from "./SocialNav";
import HeaderOpen from "./../Header/HeaderOpen";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: document.documentElement.clientWidth,
      Header: {
        backgroundColor: "transparent",
        boxShadow: "none",
        height: "100px"
      },
      HeaderHelp: {
        color: "white"
      },
      widthz
    };
  }

  componentDidMount() {
    this.setState({
      media: this.props.mediaWidth,
      height: this.props.height
    });

    if (this.state.media > 768) {
      window.addEventListener("scroll", this.handleScroll.bind(this));
    } else if (this.state.media <= 768) {
      window.removeEventListener("scroll", this.handleScroll.bind(this));
      console.log(this.state.media);
      this.setState({
        Header: { backgroundColor: "white", height: this.props.height + "px" },
        HeaderHelp: { color: "blue" }
      });
    }
  }
  componentWillUnMount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillReceiveProps = () => {
    if (this.state.media <= 768) {
      if (this.state.media !== this.props.mediaWidth) {
        this.setState({
          media: this.props.mediaWidth
        });
      }
    }
  };

  handleScroll(props) {
    const seperator = document.getElementsByClassName("seperator");

    if (window.scrollY > 40) {
      this.setState({
        Header: { backgroundColor: "white" },
        HeaderHelp: { color: "blue" }
      });

      for (var i = 0; i < s.length; i++) {
        seperator[i].style.visibility = "visible";
      }
    } else if (window.scrollY < 40) {
      this.setState({
        Header: { backgroundColor: "transparent", boxShadow: "none" },
        HeaderHelp: { color: "white" }
      });
      for (var j = 0; j < y.length; j++) {
        seperator[j].style.visibility = "hidden";
      }
    }
  }

  handleClick(e) {
    e.preventDefault();
    const width = document.getElementById("Header").style.width;
    if (width === "" || width === "0px") {
      width = "400px";
      this.setState({ styles: { left: "320px" } });
    } else if (width === "400px") {
      width = "0px";
      this.setState({ styles: { left: "10px" } });
    }
  }

  render() {
    return (
      <div>
        <HeaderOpen handleClick={this.handleClick} />
        <div className="Header" id="Header" style={this.state.Header}>
          <div className="header-help" style={this.state.HeaderHelp}>
            <Nav styles={this.state.HeaderHelp} />
            <SocialNav styles={this.state.HeaderHelp} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
