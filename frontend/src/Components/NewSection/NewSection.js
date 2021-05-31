import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './NewSection.css'
export const NewSection = () => {
    return (
        <div className="news-section-control">
            <SectionTitle title="Subscribe to Our Newsletter" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></SectionTitle>
            <div className="email-control">
                <input placeholder="Enter your email address" className="email-input"></input>
                <button className="email-subcribe">Subscribe</button>
            </div>
        </div>
    )
}
