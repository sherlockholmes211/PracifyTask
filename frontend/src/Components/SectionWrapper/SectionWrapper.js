import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './SectionWrapper.css'
const SectionWrapper = (props) => {
    const {title,desc,img} = props;
    return (
        <div className="section-wrapper-control">
            <img alt="not text" src={img}></img>
            <SectionTitle title={title} desc={desc} />
        </div>
    )
}

export default SectionWrapper
