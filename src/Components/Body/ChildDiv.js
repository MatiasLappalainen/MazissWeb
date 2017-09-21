import * as React from 'react'

const ChildDiv = ({children}) => {
    return (
        <div className="child-div">
            {children}
        </div>
    );
}

export default ChildDiv;