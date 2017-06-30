import React from 'react'
import { NavLink } from 'react-router-dom'





let elementAb = 0;


function scrollTo(element, duration, scrollTop){
    if(duration <= 0) return;
      
      var elementAbs = element;
      var perTick = 1000 / duration*10;
    
      scrollTop += perTick;
    
      setTimeout(function(){
        if(scrollTop <= elementAb){
          window.scrollTo(0, scrollTop);
          scrollTo(elementAbs, duration, scrollTop);
        }
      }, 10);
  }

class ListItem extends React.Component{


  handleScroll(){
    let position = document.getElementById('content').getBoundingClientRect().top;
    elementAb = (Math.floor(position) + window.scrollY);
    
    if(position > 0){
        if(position > document.getElementById('Header').getBoundingClientRect().height){
          scrollTo(position, 500, window.scrollY);
        }else{
          return
        }
    }else{
      return
    }
  }


  render () {

    return (
      <li className="nav-li"><NavLink onClick={() => this.handleScroll()} to={this.props.to} activeClassName="active" style={this.props.styles}><span>{this.props.text}</span></NavLink></li>

    )
  }
}


export default ListItem
