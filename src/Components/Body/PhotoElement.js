import React from 'react'

class PhotoElement extends React.Component{


  render () {

    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill' : 'cover',
      'fit' : 'contain'
    }
    let size = modes[mode] || 'contain'

    let defaults = {
      width: width || 100,
      height: height || 100,
      backgroundColor: 'gray'
    }

    let Important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <div {...props} className={this.props.className} style={{...style, ...Important, ...defaults}} />
    )
  }
}

export default PhotoElement
