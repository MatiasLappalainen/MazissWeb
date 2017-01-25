import React from 'react'
import './Header.css'
import Nav from './Nav'


class Header extends React.Component{


  componentDidMount(){
    window.addEventListener('scrollstop', this.scrollEvent.bind(this));
  }
  componentWillUnMount(){
    window.addEventListener('scrollstop', this.scrollEvent.bind(this));
  }

  scrollEvent(event){

    let el = document.getElementById('Header');
    console.log('It happened');
  }


  render () {
    return (
      <div className="Header" id="Header">
        <Nav />
      </div>
    )
  }
}

export default Header
