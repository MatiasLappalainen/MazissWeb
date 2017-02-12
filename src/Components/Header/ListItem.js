import React from 'react'
import { Link } from 'react-router'

var position = 0;

function scrollTo(element, duration, scrollTop){
    if(duration <= 0) return;
    var elementAb = element;
    var perTick = 1000 / duration*10;
    scrollTop += perTick;
    setTimeout(function(){
      window.scrollTo(0, scrollTop);
      if(element-80 < scrollTop) return;
      scrollTo(elementAb, duration, scrollTop);
    }, 10);
  }
class ListItem extends React.Component{


  componentDidMount(){
  }

  handleScroll(){
    if(position !== 0){
      if(document.getElementById('content').getBoundingClientRect().top > 101){
      scrollTo(position, 500, window.scrollY);
      }else{return}
    }else{
      position = document.getElementById('content').getBoundingClientRect().top;
      scrollTo(position, 500, window.scrollY);
    }
  }


  render () {

    return (
      <li className="nav-li"><Link onClick={this.handleScroll} to={this.props.to} activeClassName="active" style={this.props.styles}><span>{this.props.text}</span></Link></li>

    )
  }
}


export default ListItem
