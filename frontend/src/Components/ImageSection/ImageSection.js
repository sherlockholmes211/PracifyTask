import React from 'react'
import quot from '../../Assets/imgs/Group 86.png'
import avator from '../../Assets/imgs/avator.jpg'
import star from '../../Assets/imgs/star.svg'
import './ImageSection.css'
const ImageSection = () => {
    return (
        <div className="image-section-control">
            <img alt="n" src={quot} ></img>
            <img alt="n" style={{width:"100px"}} src={avator} ></img>
            <div className="image-name">Jane dane</div>
            <div className="image-stars">
                <img alt="n" style={{width:"30px"}} src={star} ></img>
                <img alt="n" style={{width:"30px"}} src={star} ></img>
                <img alt="n" style={{width:"30px"}} src={star} ></img>
                <img alt="n" style={{width:"30px"}} src={star} ></img>
                <img alt="n" style={{width:"30px"}} src={star} ></img>
            </div>
            <div className="image-content">Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and</div>
        </div>
    )
}

export default ImageSection
