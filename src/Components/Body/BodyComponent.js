import React from 'react'
import LandingText from './LandingText'
import imgurlFull from './../../lasku.webp'
import imgurlMin from './../../Lasku1080.webp'

let yTrans = 0;
let lastPos = window.pageYOffset;

let media = window.matchMedia('(max-width: 810px)');

class BodyComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {transform: 'translateY(' + yTrans + 'px)', backgroundImage: 'url('+ imgurlFull + ')'}

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

  handleChange(props){
    if(media.matches === false){
      return;
    }else if(media.matches === true){
      console.log("We are Here"),
      this.setState({backgroundImage: 'url('+ imgurlMin + ')'})
    }
  }

  componentDidMount(){
    //Handle updates
    setInterval(window.addEventListener('scroll', this.beforeScroll.bind(this), false), 50);
    window.addEventListener('change', this.handleChange.bind(this), false);
  }

  componentWillUnMount(){
    clearInterval(window.removeEventListener('scroll', this.beforeScroll.bind(this)))

  }



  render () {
    return (
      <div className="BodyComponent" id="body" style={this.state}>
        <LandingText text="Matias Lappalainen" textTwo="Programmer &amp; Designer"/>
      </div>
    )
  }
}

export default BodyComponent
