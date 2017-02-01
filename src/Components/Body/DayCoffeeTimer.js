import React from 'react'
import './Body.css'

let style = {
  width: '100% !important',
  height: '150px !important'
}

class DayCoffeeTimer extends React.Component{

  constructor(props){
    super(props);
    let day = 24*60*60*1000;
    let bDate = new Date('2017-01-27');
    let cDate = new Date();
    let tDate = Math.round(Math.abs((bDate.getTime() - cDate.getTime())/(day)));
    this.state = { time: tDate, coffee: 20 }
  }

  getInitialState(){
    let day = 24*60*60*1000;
    let bDate = new Date('2017-01-27');
    let cDate = new Date();
    let tDate = Math.round(Math.abs((bDate.getTime() - cDate.getTime())/(day)));
    return {time : tDate, coffee: 20};
  }

  onMouseEnter(props){
    this.setState({ time: "Time", coffee: "Coffees"})
  }

  onMouseLeave(props){
    this.setState(this.getInitialState)
  }

  render () {
    return (
      <div className="Timer-wrapper">
        <div className="Timer" style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}><div className="timer-el"><h1>{this.state.time}</h1></div></div>
        <div className="Timer" style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}><div className="timer-el"><h1>{this.state.coffee}</h1></div></div>
      </div>
    )
  }
}


export default DayCoffeeTimer
