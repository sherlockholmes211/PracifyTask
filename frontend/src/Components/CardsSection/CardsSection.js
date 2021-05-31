import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import quot from '../../Assets/imgs/Group 86.png'
import ArticleCard from '../ArticleCard/ArticleCard'
import card1 from '../../Assets/imgs/card1.png'
import card2 from '../../Assets/imgs/card2.png'
import card3 from '../../Assets/imgs/card3.png'
import './CardsSection.css'

const CardsSection = () => {
    return (
        <div className="cards-section-control">
            <SectionWrapper img={quot} title="Read Our Blog" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></SectionWrapper>
            <div className="cards-section-img-control">
                <ArticleCard img={card1}/>
                <ArticleCard img={card2}/>
                <ArticleCard img={card3}/>
            </div>
        </div>
    )
}

export default CardsSection
