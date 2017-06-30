import React from 'react'

class HeaderOpen extends React.Component{

  constructor(props){
    super(props);

      this.state = {
        styles: {
          left: '10px',
        }
      }

    }

  handleClick(e){
    e.preventDefault();
    if(document.getElementById('Header').style.width === "" || document.getElementById('Header').style.width === "0px"){

      document.getElementById('Header').style.width = "200px";

    //  document.getElementById('open').style.left = '120px';
      this.setState({styles: {left: '120px'}})


    }else if(document.getElementById('Header').style.width === "200px"){

      document.getElementById('Header').style.width = '0px';
    //  document.getElementById('open').style.left = '10px';
      this.setState({styles: {left: '10px'}})

    }
  }

  render () {
    return (
      <button className="Open" id="open" onClick={this.handleClick.bind(this)} style={this.state.styles}><i className="fa fa-bars fa-3x" aria-hidden="true"></i></button>
    )
  }
}

export default HeaderOpen
