import React from 'react'
import './SectionTitle.css'
const SectionTitle = (props) => {
    const {title,desc} = props;
    return (
        <div className="section-control">
            <div className="section-title">{title}</div>
            <p className="section-desc">{desc}</p>
        </div>
    )
}

export default SectionTitle
