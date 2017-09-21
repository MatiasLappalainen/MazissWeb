import React from 'react'


class AnimationWrapper extends React.Component {

  beforeScroll(props) {

    //request AnimationFrames
    var requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame;
    //Go to Function
    requestAnimationFrame(this.handleScroll.bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.beforeScroll.bind(this));
  }
  componentWillUnMount() {
    window.removeEventListener('scroll', this.beforeScroll.bind(this));
  }

  handleScroll() {
    //timeout
    setTimeout(function () {
      //Get offsets
      let parElement = document.getElementById('animation'),
        parElementTop = parElement.offsetTop,
        element = document.getElementById('home_h1'),
        ElementOffSet = element.offsetTop,
        bodyOffsetTop = window.scrollY,
        finalY = (parElementTop - ElementOffSet + 20)

      if (ElementOffSet <= bodyOffsetTop) {

        element.style.transform = 'translateY(' + finalY + 'px)'

      } else if (ElementOffSet >= bodyOffsetTop) {
        element.style.transform = 'translateY(0px)'
      }
    }, 1000);
  }

  render() {
    return (
      <div className="AnimationWrapper" id="animation">
        {this.props.children}
      </div>
    )
  }
}

export default AnimationWrapper
