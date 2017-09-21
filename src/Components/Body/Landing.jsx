import React from 'react';


const Landing = ({backgroundColor, className, children}) => {
    return (
        <div className={className + ' landing'} style={{backgroundColor: backgroundColor}}>
            {children}
        </div>
    )
}

export default Landing;