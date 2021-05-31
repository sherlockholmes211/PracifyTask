import React from 'react'
import  NavBar  from '../Nav/NavBar'
import './HeroContent.css'
const HeroContent = () => {
    return (
        <div className="hero-background">
            <NavBar/>
            <div className="hero-content-control">
                <div className="hero-title">Healthy life with</div>
                <h1 className="hero-title-bold">Nature Organic</h1>
                <p className="hero-content-desc">
                Vegetables are the edible parts of a plant 
that is used in cooking or can be eaten now.
                </p>
                <button className="hero-button">
                    Explore Now
                </button>
            </div>
        </div>
    )
}

export default HeroContent;
