import React from 'react'
import LandingText from './LandingText'

let yTrans = 0;
let lastPos = window.pageYOffset;



class BodyComponent extends React.Component{


  constructor(props){
    super(props);

    this.state = {transform: 'translateY(' + yTrans + 'px)'}
  }

  beforeScroll(props){

    //request AnimationFrames
    var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
    //Go to Function
    requestAnimationFrame(this.handleScroll.bind(this));
  }

  handleScroll(props){


    //Get Window Top
    var ls = window.pageYOffset || document.documentElement.scrollTop;

    if(ls > lastPos){
      yTrans = -(ls*0.7).toFixed(2);
      this.setState({transform: 'translateY(' + yTrans + 'px)'})

    }else{
      yTrans = -(ls*0.7).toFixed(2);
      this.setState({transform: 'translateY(' + yTrans + 'px)'})

    }

  lastPos = window.scrollY;


}


  componentDidMount(){
    //Handle updates
    setInterval(window.addEventListener('scroll', this.beforeScroll.bind(this), false), 50)
  }

  componentWillUnMount(){
    clearInterval(window.removeEventListener('scroll', this.beforeScroll.bind(this)))

  }



  render () {
    return (
      <div className="BodyComponent" style={this.state}>
        <LandingText text="Matias Lappalainen" textTwo="Programmer &amp; Designer"/>
      </div>
    )
  }
}

export default BodyComponent
