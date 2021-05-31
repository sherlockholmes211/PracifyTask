import React from 'react'
import './Cards.css'
import card from "../../Assets/imgs/Group\ 207.png"
import card1 from "../../Assets/imgs/Group\ 205.png"
const Cards = () => {
    return (
        <div className="card-control">
            <img alt="no text" src={card}></img>
            <img alt="no text" src={card}></img>
            <img alt="no text" src={card1}></img>
            <img alt="no text" src={card}></img>
        </div>
    )
}

export default Cards
