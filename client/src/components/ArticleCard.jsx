import React from 'react';
import './ArticleCard.css';
import { Link } from 'react-router-dom'

const ArticleCard = (props) => {
    return (
        <div className="article-card">
            <Link className="card" to={`/articles/${props._id}`}>
                <img className="article-card-image" src={props.imgURL} alt={props.title} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default ArticleCard