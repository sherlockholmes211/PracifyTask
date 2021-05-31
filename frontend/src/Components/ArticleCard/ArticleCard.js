import React from 'react'
import './ArticleCard.css'
const ArticleCard = (props) => {
    const {img} = props;
    return (
        <div className="article-card-control">
            <div className="article-image-control">
                <img alt="no text" src={img} className="article-image"></img>
            </div>
            <div className="article-title">Blog Post One</div>
            <div className="article-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
            <div className="article-link">Read More</div>
        </div>
    )
}

export default ArticleCard
