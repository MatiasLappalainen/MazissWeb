import React from 'react'


class AnimationWrapper extends React.Component{

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnMount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){

    setTimeout(function () {


    let parElement = document.getElementById('animation'),
        parElementTop = parElement.offsetTop,
        element = document.getElementById('home_h1'),
        ElementOffSet = element.offsetTop,
        bodyOffsetTop = window.scrollY,
        finalY = (parElementTop - ElementOffSet + 20)

        if(ElementOffSet <= bodyOffsetTop){

          element.style.transform = 'translateY(' + finalY + 'px)'

        }else if(ElementOffSet >= bodyOffsetTop){
          element.style.transform = 'translateY(0px)'
        }
      }, 1000);
  }

  render () {
    return (
      <div className="AnimationWrapper" id="animation">
        {this.props.children}
      </div>
    )
  }
}

export default AnimationWrapper
