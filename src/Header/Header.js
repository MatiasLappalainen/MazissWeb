import React from 'react'
import '../index.css'
import Colorbutton from '../Colorbutton'
import {StickyContainer, Sticky} from 'react-sticky';

const Header = React.createClass({
  render () {
    return (
      <div>
        <StickyContainer>
          <Sticky>
            <header>
        <div className="buttons">
        <Colorbutton color="rgba(0,255,255,0.2)" name="Ocean-Blue"/>
        <Colorbutton color="rgba(0,0,255,0.2)" name="Blue"/>
        <Colorbutton color="rgba(0,255,0,0.2)" name="Green" />
        <Colorbutton color="rgba(255,255,0,0.2)" name="Yellow" />
        </div>
        </header>
        </Sticky>
        </StickyContainer>
      <div className="header">

    </div>
    </div>
    )
  }
})

export default Header
