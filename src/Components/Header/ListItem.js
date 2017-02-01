import React from 'react'
import { Link } from 'react-router'



function scrollTo(element, from, duration, scrollTop){
    if(duration <= 0) return;
    var perTick = 1000 / duration*10;
    scrollTop = scrollTop + perTick;
    setTimeout(function(){
      window.scrollTo(0, scrollTop);
      if(scrollTop > element) return;
      scrollTo(element, from, duration, scrollTop);
    }, 10);
  }

class ListItem extends React.Component{



  handleScroll(){

      if(document.getElementById('content').getBoundingClientRect().top > 101){
        scrollTo(document.getElementById('content').getBoundingClientRect().top, 0, 600, 0);
      }else{return}

  }


  render () {

    return (
      <li className="nav-li"><Link onClick={this.handleScroll} to={this.props.to} activeClassName="active" style={this.props.styles}><span>{this.props.text}</span></Link></li>

    )
  }
}


export default ListItem
