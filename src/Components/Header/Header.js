import React from 'react'
import Nav from './Nav'
import SocialNav from './SocialNav'
import HeaderOpen from './../Header/HeaderOpen'


class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      Header: {
      backgroundColor: 'transparent',
      boxShadow: 'none'

    },
    HeaderHelp: {
      color: 'white'
    }
    }
  }

  componentDidMount(){

    let media = window.matchMedia("(min-width: 811px)");

    if(media.matches === true){

      window.addEventListener('scroll', this.handleScroll.bind(this));

    }else if(media.matches === false){
      window.removeEventListener('scroll', this.handleScroll);
      this.setState({Header: {backgroundColor: 'white'}, HeaderHelp:{color: 'blue'}});
  }
  }

  componentWillUnMount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this));

  }

  handleScroll(props){

    if(window.scrollY > 40){
      this.setState({Header: {backgroundColor: 'white'}, HeaderHelp:{color: 'blue'}});
      var s = document.getElementsByClassName('seperator');
      for(var i = 0; i < s.length; i++){
        s[i].style.visibility = 'visible';
      }
    }else if(window.scrollY < 40){
      this.setState({Header: {backgroundColor: 'transparent', boxShadow: 'none'}, HeaderHelp: {color: 'white'}});
      var y = document.getElementsByClassName('seperator');
      for(var j = 0; j < y.length; j++){
        y[j].style.visibility = 'hidden';
      }
    }
  }

  render () {
    return (
      <div>
        <HeaderOpen />
      <div className="Header" id="Header" style={this.state.Header}>
        <div className="header-help" style={this.state.HeaderHelp}>
        <Nav styles={this.state.HeaderHelp}/>
        <SocialNav styles={this.state.HeaderHelp}/>
        </div>
      </div>
      </div>
    )
  }
}

export default Header
