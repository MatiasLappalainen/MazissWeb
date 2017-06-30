import React from 'react';

import PortfolioItem from '../Components/Body/portfolioItem';
class Portfolio extends React.Component {


    render() {
        return <div className="child-div">
                
                <div className="portfolio-wrapper">
                
                    <div className="landing">
                        
                        <PortfolioItem name="Algorithm" text="I started to make admin panel where you could display data about your users behaviour on your website and make changes from the data" to="www.github.com" />
                        <PortfolioItem name="Data-Reader" text="I started to make admin panel where you could display data about your users behaviour on your website and make changes from the data" to="www.github.com" />
                        <PortfolioItem name="Website Register" text="This was one of my first web-dev projects which I made, and I was pretty darn satisfied with it" to="www.github.com" />
                        
                    </div>
                
                </div>
            </div>
        
    }
}

export default Portfolio;