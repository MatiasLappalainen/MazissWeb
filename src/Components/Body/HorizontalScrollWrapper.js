import React from 'react'

class HorizontalScrollWrapper extends React.Component{
  render () {
    return (
      <div className="Horizontal">{this.props.children}</div>
    )
  }
}

export default HorizontalScrollWrapper
